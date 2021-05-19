import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, retry, tap, timeout} from 'rxjs/operators';
import {HttpRequestCustomError} from "../../../../common/error/http-request-custom-error";

@Injectable({
  providedIn: 'root'
})
export class ApiClientHttpService {

  private readonly RETRIES = 1;
  private readonly TIMEOUT = 10 * 1000;

  constructor(private httpClient: HttpClient) {
  }

  get(url: string, params: HttpParams, mapper: any): Observable<any> {
    const _params = params ? '?' + params.toString() : '';
    return this.httpClient.get<any>(url, {headers: this.getHeaders(), params: params})
      .pipe(
        timeout(this.TIMEOUT),
        retry(this.RETRIES),
        catchError(this.handleError),
        tap(this.handleCheckWSError),
        catchError(this.handleWSError),
        map(mapper)
      );
  }

  post(url: string, body: any, mapper: any, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.post<any>(url, body, {headers: this.getHeaders(), params: params})
      .pipe(
        timeout(this.TIMEOUT),
        retry(this.RETRIES),
        catchError(this.handleError),
        tap(this.handleCheckWSError),
        catchError(this.handleWSError),
        map(mapper)
      );
  }

  private getHeaders(): HttpHeaders {
    let header = new HttpHeaders();
    header = header.append('Accept', 'application/json');
    header = header.append('Content-Type', 'application/json');
    return header;
  }


  private handleError(error: HttpErrorResponse) {
    if (error && error.error && (error.error.Codigo && error.error.IdOperacion)) {
      const errorCatch: any = error.error;
      const customError: HttpRequestCustomError = new HttpRequestCustomError(errorCatch.Codigo, errorCatch.Mensaje);
      return throwError(customError);
    } else if (error && error.error instanceof Array && (error.error[0] && error.error[0].Codigo && error.error[0].IdOperacion)) {
      const errorCatch: any = error.error[0];
      const customError: HttpRequestCustomError = new HttpRequestCustomError(errorCatch.Codigo, errorCatch.Mensaje);
      return throwError(customError);
    }
    return throwError(error);
  }

  private handleCheckWSError(error: any) {
    if (error && error instanceof Array && error.length) {
      const checkError: any = error[0];
      if (checkError.Error) {
        const errorCatch = checkError.Error;
        throw new HttpRequestCustomError(errorCatch.Codigo, errorCatch.Mensaje);
      }
    }
  }

  private handleWSError(error: HttpRequestCustomError) {
    return throwError(error);
  }

}
