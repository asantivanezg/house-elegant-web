import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {ErrorDialogComponent} from './error-dialog/error-dialog.component';
import {DisclaimerDialogComponent} from './disclaimer-dialog/disclaimer-dialog.component';
import {MaterialModule} from "./material.module";
import {ModalDialogComponent} from "./layouts/modal-dialog/modal-dialog.component";
import {LoadingComponent} from "./loading/loading.component";
import {SidenavListComponent} from "./sidenav-list/sidenav-list.component";
import {SuccessDialogComponent} from "./success-dialog/success-dialog.component";


@NgModule({
  declarations: [
    HeaderComponent,
    ErrorDialogComponent,
    ModalDialogComponent,
    DisclaimerDialogComponent,
    LoadingComponent,
    SidenavListComponent,
    SuccessDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    HeaderComponent,
    LoadingComponent,
    ErrorDialogComponent,
    DisclaimerDialogComponent,
    ModalDialogComponent,
    SidenavListComponent,
    SuccessDialogComponent
  ]
})
export class SharedModule {
}
