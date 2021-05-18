import {Injectable} from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';
import {Strings} from '../utils/strings';
import {MatDialog} from "@angular/material/dialog";
import {SuccessDialogComponent} from "../../core/ui/shared/success-dialog/success-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class SuccessService {

  constructor(private dialog: MatDialog, private overlay: Overlay) {
  }

  public simpleSuccess(success: string) {

    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      width: '350px',
      autoFocus: false,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      data: {
        title: Strings.TEXT_BASICS.SUCCESS,
        message: success
      }
    });
  }

  public basicSuccess(titleText: string, success: string) {

    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      width: '350px',
      autoFocus: false,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      data: {
        title: titleText,
        message: success
      }
    });
  }
}
