import {EventEmitter, Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private onTitle: Subject<string> = new Subject<string>();
  private onParameterUpdate: Subject<boolean> = new Subject<boolean>();
  public onRolesChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  // region title

  setTitle(title: string) {
    this.onTitle.next(title);
  }

  observeTitle(): Observable<string> {
    return this.onTitle.asObservable();
  }

  // endregion

  // region parameter update

  updateParamters() {
    this.onParameterUpdate.next(true);
  }

  observeUpdateParamters(): Observable<boolean> {
    return this.onParameterUpdate.asObservable();
  }

  // endregion

}
