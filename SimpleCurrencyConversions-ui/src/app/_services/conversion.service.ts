import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LatestOpenExchangeRatesResponse } from '../_models/latestOpenExchangeRatesResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  openExchangeRatesBaseUrl = 'https://openexchangerates.org/api';
  appId = '803b49d404bb4dc9baf6091b9b97de8a';

  backendBaseUrl = 'http://';

  constructor(private http: HttpClient) { }

  public getLast10Conversions() {

  }


  public getCurrencyRatesInUSD(currencyIn: string, currencyOut: string) : Observable<LatestOpenExchangeRatesResponse>{
    return this.http.get<LatestOpenExchangeRatesResponse>(`${this.openExchangeRatesBaseUrl}/latest.json`, {
        params: {
          app_id: this.appId, symbols: currencyIn + ',' + currencyOut
        }
      });
  }
}
