import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.sass']
})
export class ModalDialogComponent implements OnInit {

  @Input() dialogRef: MatDialogRef<any> | undefined;
  @Input() hasActions: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  public onCloseButtonClick(): void {
    if (this.dialogRef != undefined) {
      this.dialogRef.close();
    }
  }

}
