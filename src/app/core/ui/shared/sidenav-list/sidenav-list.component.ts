import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import {ErrorService} from "../../../../common/services/error.service";
import {HeaderService} from "../../../../common/services/header.service";
import {SuccessService} from "../../../../common/services/success.service";

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.sass']
})
export class SidenavListComponent implements OnInit {
  panelOpenStatePlat = true;
  panelOpenStateFauna = false;
  panelOpenStateSEI = false;
  panelOpenStateOpe = false;
  panelOpenStateAdmin = false;

  filterParents: any[] = [];
  filterChilds: any[] = [];

  allRoutes = [];

  @Output() sidenavClose = new EventEmitter();

  // permissions = Constants.PERMISSIONS;

  // setValues bool
  consultarOcVisible = false;
  consultarFacturaVisible = false;
  consultarProveedorVisible = false;
  datosProveedorVisible = false;
  administracionSistemaVisible = false;
  consultarDashboardVisible = false;
  step: number = 0;

  constructor(private route: Router,
              private errorServices: ErrorService,
              private successServices: SuccessService,
              private headerSrv: HeaderService
  ) {
  }

  ngOnInit() {
    // this.setValuesBool();
    // this.getPermissions();
    // this.headerSrv.onRolesChange.subscribe(
    //   rolesChange => {
    //     this.getPermissions();
    //   }
    // );
  }

  // setStep(index: number): boolean {
  //   for ( let i = 0; i < this.allRoutes.length; i++ ) {
  //     if ( i == index ) {
  //       this.allRoutes[i].open = !this.allRoutes[i].open;
  //     }
  //   }
  //   return this.allRoutes[index].open;
  // }

  // getPermissions() {
  //   this.authController.getSession()
  //     .then(user => {
  //       this.roleSecurityController.getRoutes(user.email)
  //         .then(roleList => {
  //           roleList.map( item => item.open = false );
  //           this.allRoutes = roleList;
  //         }).catch(( error ) => {
  //         this.authController.getValue( Constants.USER_MODULES )
  //           .then((res) => {
  //             this.allRoutes = JSON.parse( res );
  //             this.allRoutes = [ ...this.allRoutes.filter( item => item.hijos.length > 0 )];
  //           });
  //       });
  //     });
  //
  // }

  setValuesBool() {
    // this.showHiddenItem(this.permissions.CONSULTAR_OC).then(res => this.consultarOcVisible = res);
    //
    // this.showHiddenItem(this.permissions.CONSULTAR_DOCUMENTOS).then(res => this.consultarFacturaVisible = res);
    //
    // this.showHiddenItem(this.permissions.MODIFICAR_DATOS_PROVEEDOR).then(res => this.datosProveedorVisible = res);
    //
    // this.showHiddenItem(this.permissions.CONSULTAR_PROVEEDOR).then(res => this.consultarProveedorVisible = res);
    //
    // this.showHiddenItem(this.permissions.ADMINISTRAR_PARAMETROS).then(res => this.administracionSistemaVisible = res);
    //
    // this.showHiddenItem(this.permissions.ADMINISTRAR_PARAMETROS).then(res => this.consultarDashboardVisible = res);
  }

  // public showHiddenItem(code: string): Promise<boolean> {
    // return undefined;
    // return this.authController.getPermission(code);
  // }

  public onSidenavClose(url: string, code?: string) {
    this.sidenavClose.emit();
    this.route.navigate([url]);
    // if (code !== '') {
    //   this.authController.getPermission(code)
    //     .then(res => {
    //       if (res) {
    //         this.sidenavClose.emit();
    //         this.route.navigate([url]);
    //       } else {
    //         this.successServices.basicSuccess(Strings.TEXT_BASICS.PERMISSION, Strings.DONT_HAVE_PERMISSIONS);
    //       }
    //     }).catch(err => this.errorServices.simpleCatchError(err));
    // } else {
    //   this.sidenavClose.emit();
    //   this.route.navigate([url]);
    // }
  }

  // public onGoDashboard() {
  //   window.open(Constants.DASHBOARD_URL, '_blank');
  // }
}
