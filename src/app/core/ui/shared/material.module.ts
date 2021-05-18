// import {MAT_DATEPICKER_FORMATS, AppDateAdapter} from './providers/mat-date-picker';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// import {getSpanishPaginatorIntl} from './providers/spanish-paginator-intl';
import {
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  DateAdapter,
  MatRippleModule,
  MatNativeDateModule
} from '@angular/material/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatMenuModule} from "@angular/material/menu";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSortModule} from "@angular/material/sort";



const modules = [
  MatSidenavModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
  MatTabsModule,
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatMenuModule,
  MatCardModule,
  MatDialogModule,
  MatSelectModule,
  MatDividerModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatSortModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatRippleModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...modules
  ],
  providers: [
    MatDatepickerModule,
    {provide: MAT_DATE_LOCALE, useValue: 'es-PE'},
  ]
})
export class MaterialModule {
}
