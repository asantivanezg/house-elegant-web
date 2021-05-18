import {Injectable} from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';
import {MatDialog} from "@angular/material/dialog";
import {DisclaimerDialogComponent} from "../../core/ui/shared/disclaimer-dialog/disclaimer-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class DisclaimerService {

  constructor(private dialog: MatDialog,
              private overlay: Overlay) {
  }

  public open(title: string, message: string, isAlert: boolean = false, component: any = DisclaimerDialogComponent): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {

      const dialogRef = this.dialog.open(component, {
        // width: '900px',
        width: '350px',
        autoFocus: false,
        scrollStrategy: this.overlay.scrollStrategies.block(),
        data: {
          title,
          message,
          isAlert,

        }
      });

      dialogRef.afterClosed().subscribe((response: { action: boolean }) => {
        if (response && response.action) {
          resolve(true);
        } else {
          resolve(false);
        }
      });

    });
  }

  public openCustom(title: string, message: string, isAlert: boolean = false, component: any = DisclaimerDialogComponent, data: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const dialogRef = this.dialog.open(component, {
        // width: '900px',
        width: '350px',
        autoFocus: false,
        scrollStrategy: this.overlay.scrollStrategies.block(),
        data: {
          title,
          message,
          isAlert,
          data,
        }
      });

      dialogRef.afterClosed().subscribe((response: { action: boolean, data: any }) => {
        if (response && response.action) {
          resolve({action: true, data: response.data});
        } else {
          resolve(false);
        }
      });
    });
  }

  public openCustomV2(isAlert: boolean = false, component: any = DisclaimerDialogComponent, data: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const dialogRef = this.dialog.open(component, {
        // width: '900px',
        width: '350px',
        autoFocus: false,
        scrollStrategy: this.overlay.scrollStrategies.block(),
        data
      });

      dialogRef.afterClosed().subscribe((response: {
        action: boolean,
        dateFrom: Date,
        dateTo: Date,
        airport: string
      }) => {
        if (response && response.action) {
          resolve({action: true, data: response});
        } else {
          resolve(false);
        }
      });
    });
  }
}
