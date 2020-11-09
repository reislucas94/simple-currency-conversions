import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CurrencyConversion } from '../_models/currencyConversion.model';
import { CurrencyDropdown } from '../_models/currencyDropdown.model';
import { ConversionService } from '../_services/conversion.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  public currencyOptions: Array<CurrencyDropdown>;
  public currencyIn: CurrencyDropdown;
  public currencyOut: CurrencyDropdown;
  public currencyDropdownConfig: any;
  public inputValue: number;
  public outputValue: number;

  conversions = [];
  loadingIndicator = true;
  columns = [];

  constructor(public conversionService: ConversionService, public datePipe: DatePipe) {
    this.columns = [
      { name: 'InputValue', sortable: true }, 
      { name: 'InputCurrency', sortable: true }, 
      { name: 'OutputCurrency', sortable: true} , 
      { name: 'OutputValue', sortable: true }, 
      { name: 'ConvertedAt', sortable: true}
    ];

    this.loadHistory();
  }

  ngOnInit() {
    this.currencyOptions = [
      {name: 'BRL (Brazilian Real)', value: 'BRL'},
      {name: 'USD (United States Dollars)', value: 'USD'},
      {name: 'EUR (Euro)', value: 'EUR'},
      {name: 'JPY (Japanese Yen)', value: 'JPY'}
    ];

    this.currencyDropdownConfig = {
      displayKey: 'name',
      search: true,
      height: 'auto',
      placeholder: 'Select the currency',
      noResultsFound: 'No results found',
      searchPlaceholder: 'Search',
      searchOnKey: 'name',
      clearOnSelection: false
    };
  }

  private loadHistory() {
    this.conversionService.getLast10Conversions().subscribe(data=>{
      this.conversions = data;
      this.conversions.forEach(x => {
        x.convertedAt = this.datePipe.transform(x.convertedAt, 'dd/MM/yyyy hh:mm:ss');
      })
    })
  }

  convert() {
    let conversionRecord = { 
      inputValue: this.inputValue, 
      inputCurrency: this.currencyIn.value, 
      outputCurrency: this.currencyOut.value}

    this.conversionService.convert(conversionRecord).subscribe(
      data => {
        if(data) {
          this.outputValue = Number(data);
        }

        this.loadHistory();
      });
  }
}
