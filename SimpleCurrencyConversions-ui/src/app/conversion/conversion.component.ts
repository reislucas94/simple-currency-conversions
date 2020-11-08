import { Component, OnInit } from '@angular/core';
import { CurrencyDropdown } from 'app/models/currencyDropdown.model';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  public currencyOptions: Array<CurrencyDropdown>;
  public currencyIn: CurrencyDropdown;
  public currencyInConfig: any;

  constructor() { }

  ngOnInit() {
    this.currencyOptions = [
      {name: 'BRL (Brazilian Real)', value: 'BRL'},
      {name: 'USD (United States Dollars)', value: 'USD'},
      {name: 'EUR (Euro)', value: 'EUR'},
      {name: 'JPY (Japanese Yen)', value: 'JPY'}
    ];

    this.currencyInConfig = {
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

  public currencyInChanged(currency) {
    console.log(currency);
  }

}
