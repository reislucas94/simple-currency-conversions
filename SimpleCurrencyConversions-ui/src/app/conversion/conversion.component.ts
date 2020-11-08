import { Component, OnInit } from '@angular/core';
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

  constructor(private conversionService: ConversionService) { }

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

  public currencyInChanged(currencyIn) {
    console.log(currencyIn);
  }

  public currencyOutChanged(currencyOut) {
    console.log(currencyOut);
  }

  convert() {
    this.conversionService.getValueInUSD(this.currencyIn.value, this.currencyOut.value).subscribe(
      data => {
        if(data) {
          console.log(data);
          let result = data.rates;
          let inCurrencyValueUSD = result[this.currencyIn.value];
          let outCurrencyValueUSD = result[this.currencyOut.value];
          
          this.outputValue = this.inputValue/inCurrencyValueUSD*outCurrencyValueUSD;
        }
      }
    )
  }
}
