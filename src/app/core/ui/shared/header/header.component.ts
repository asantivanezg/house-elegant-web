import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {User} from '../../../domain/model/user';
import {Router} from '@angular/router';
import {DisclaimerService} from '../../../../common/services/disclaimer.service';
import {LoadingService} from '../../../../common/services/loading.service';
import {ErrorService} from '../../../../common/services/error.service';
import {HeaderService} from '../../../../common/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() public appTitle: string | undefined;
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private router: Router,
              private disclaimerSrv: DisclaimerService,
              private loadingService: LoadingService,
              private errorService: ErrorService,
              private headerSrv: HeaderService) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  public async logOut() {

    // this.disclaimerSrv.open(Strings.TEXT_BASICS.ALERT, Strings.TEXT_DISCLAIMER.LOGOUT)
    //   .then(confirm => {
    //     if (confirm) {
    //       this.loadingService.showLoading();
    //       this.authController.removeDB().then((resp) => {
    //         this.authController.removeSession()
    //           .then(() => {
    //             this.loadingService.hiddenLoading();
    //             this.adalSvc.logout();
    //           })
    //           .catch(() => this.errorService.simpleCatchError(Strings.ERROR_LOGOUT.REMOVE_SESSION, Strings.TEXT_BASICS.ERROR));
    //       })
    //         .catch(() => this.errorService.simpleCatchError(Strings.ERROR_LOGOUT.REMOVE_DB, Strings.TEXT_BASICS.ERROR));
    //     }
    //   });
  }

}
