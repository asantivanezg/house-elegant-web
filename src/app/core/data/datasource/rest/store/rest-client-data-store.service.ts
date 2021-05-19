import {Injectable} from '@angular/core';
import {ClientDataStoreInterface} from "../../client-data-store.interface";
import {ClientDto} from "../dto/client-dto";
import {environment} from "../../../../../../environments/environment";
import {ApiClientHttpService} from "../api-client-http.service";

@Injectable({
  providedIn: 'root'
})
export class RestClientDataStoreService implements ClientDataStoreInterface {

  private baseUrl: string = environment.rest_api + "/api/cliente"
  private clientInsertUrl: string = this.baseUrl + "/insert"

  constructor(private apiClientHttpService: ApiClientHttpService) {
  }

  insertClient(dto: ClientDto): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        this.apiClientHttpService.post(this.clientInsertUrl, dto, (res: any) => resolve(res))
          .subscribe((res) => resolve(res), error => reject(error))
      }
    )
  }
}
