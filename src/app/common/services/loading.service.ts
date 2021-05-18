import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private onLoading: Subject<boolean> = new Subject<boolean>();

  constructor() {
  }

  // region loading

  showLoading() {
    this.onLoading.next(true);
  }

  hiddenLoading() {
    this.onLoading.next(false);
  }

  observeLoading(): Observable<boolean> {
    return this.onLoading.asObservable();
  }

  // endregion

}
