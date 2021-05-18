import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-disclaimer-dialog',
  templateUrl: './disclaimer-dialog.component.html',
  styleUrls: ['./disclaimer-dialog.component.sass']
})
export class DisclaimerDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DisclaimerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { title: string, message: string, isAlert: boolean, isHtml: boolean }) {

  }

  ngOnInit() {
  }

  onConfirm() {
    this.dialogRef.close({action: true});
  }

  onCancel() {
    this.dialogRef.close();
  }

}
