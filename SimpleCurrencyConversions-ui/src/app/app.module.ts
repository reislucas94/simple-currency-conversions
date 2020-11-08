import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { ConversionComponent } from './conversion/conversion.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
