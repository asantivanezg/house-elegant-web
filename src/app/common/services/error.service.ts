import {Injectable} from '@angular/core';
import {Strings} from '../utils/strings';
import {Overlay} from '@angular/cdk/overlay';
import {Constants} from '../utils/constants';
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../core/ui/shared/error-dialog/error-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private restoreInProgress: boolean = false;

  constructor(private dialog: MatDialog,
              private overlay: Overlay) {
  }

  public simpleCatchError(error: any, title?: string, isHtml?: boolean): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      console.error(error);
      const errorObject = this.getMessageError(error);
      const messageErrorMsg = errorObject.Message;
      if (messageErrorMsg !== Constants.NOT_SHOW_ERROR) {
        if (errorObject.ShowOnError) {
          const dialogRef = this.dialog.open(ErrorDialogComponent, {
            width: isHtml ? '500px' : '350px',
            autoFocus: false,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            data: {
              title: title ? title : Strings.TEXT_BASICS.ERROR,
              message: messageErrorMsg,
              isHtml: isHtml
            }
          });
        } else {
          const disclaimergRef = this.dialog.open(ErrorDialogComponent, {
            width: isHtml ? '500px' : '350px',
            autoFocus: false,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            data: {
              title: title ? title : Strings.TEXT_BASICS.ERROR,
              message: messageErrorMsg,
              isHtml: isHtml,
              isAlert: true
            }
          });

          disclaimergRef.afterClosed().subscribe(() => {
            disclaimergRef.close(false);
            resolve(false);
          });
        }
      }
    });
  }

  public getMessageError(exception: any): any {
    let messageError: string = '';
    const messageObject: any = {
      Message: '',
      ShowOnError: true
    };
    if (typeof exception == 'string') {
      messageError = exception;
      messageObject.ShowOnError = false;
    } else {
      /*if (error) {
       if (error instanceof HttpRequestCustomError) {
         messageError = error.message;
       } else if (error instanceof HttpErrorResponse) {
         messageError = error.message;
       } else {
         messageError = error.toString();
       }
     } else {
       messageError = Strings.ERROR_DEFAULT.MESSAGE;
     }*/
      switch (exception.status) {
        case 400:
          messageObject.ShowOnError = false;
          messageError = exception.error.Mensaje;
          break;
        case 401:
          if (!this.restoreInProgress) {
            this.restoreInProgress = true;
            // messageError = Strings.ERROR_LOGIN_SETUP.ERROR_SERVICE_401;
            messageError = Constants.NOT_SHOW_ERROR;
            // this.tryRestoreSession();
          } else {
            messageError = Constants.NOT_SHOW_ERROR;
          }
          break;
        default:
          messageError = Strings.ERROR_DEFAULT.MESSAGE;
          break;
      }
    }
    messageObject.Message = messageError;
    return messageObject;
  }

  // private tryRestoreSession() {
  //   const dialogRef = this.dialog.open(RestoreSessionComponent, {
  //     width: '550px',
  //     autoFocus: false,
  //     disableClose: true,
  //     scrollStrategy: this.overlay.scrollStrategies.block(),
  //     data: {}
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.restoreInProgress = false;
  //   });
  // }

}
