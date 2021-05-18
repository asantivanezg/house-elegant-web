import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {LoadingService} from "../../../../common/services/loading.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass']
})
export class LoadingComponent implements OnInit {

  private subscriptionLoading: Subscription | undefined;
  private subscriptionLoadingSync: Subscription | undefined;

  isLoading = false;
  isLoadingSync = false;

  constructor(private loadingService: LoadingService) {
    this.applySubscriptionLoading();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.subscriptionLoading) {
      this.subscriptionLoading.unsubscribe();
    }

    if (this.subscriptionLoadingSync) {
      this.subscriptionLoadingSync.unsubscribe();
    }
  }

  private applySubscriptionLoading() {
    this.subscriptionLoading = this.loadingService.observeLoading()
      .subscribe((value) => this.isLoading = value);

    // this.subscriptionLoadingSync = this.loadingSyncService.observeLoadingSync()
    //   .subscribe((value) => this.isLoadingSync = value);
  }
}
