import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CrudComponent} from './crud/crud.component';
import {RouterModule, Routes} from "@angular/router";
import {CreateClientComponent} from './create-client/create-client.component';
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: CrudComponent
  },
  {
    path: 'nuevo',
    component: CreateClientComponent
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    CrudComponent,
    CreateClientComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class ClientModule {
}
