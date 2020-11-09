import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { ConversionComponent } from './conversion/conversion.component';
import { HistoryTableComponent } from './conversion/history-table/history-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    ConversionComponent,
    HistoryTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SelectDropDownModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
