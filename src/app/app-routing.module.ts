import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/ui/home/home.component";

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    canActivate: []
  },
  {
    path: 'cliente',
    loadChildren:  () => import(`./core/ui/client/client.module`).then(m => m.ClientModule),
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
