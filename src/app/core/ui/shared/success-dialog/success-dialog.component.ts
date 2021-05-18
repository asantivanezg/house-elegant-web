import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.sass']
})
export class SuccessDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SuccessDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { title: string, message: string }) {
  }

  ngOnInit() {
  }

  onCloseDialog() {
    this.dialogRef.close();
  }
}
