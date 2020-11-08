import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LatestOpenExchangeRatesResponse } from '../_models/latestOpenExchangeRatesResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  baseUrl = 'https://openexchangerates.org/api';
  appId = '803b49d404bb4dc9baf6091b9b97de8a';

  constructor(private http: HttpClient) { }

  public getValueInUSD(currencyIn: string, currencyOut: string) : Observable<LatestOpenExchangeRatesResponse>{
    
    let parameters = new HttpParams();
    parameters.append('app_id', this.appId);
    parameters.append('symbols', currencyIn + ',' + currencyOut);

    return this.http.get<LatestOpenExchangeRatesResponse>(`${this.baseUrl}/latest.json`, {params: {app_id: this.appId, symbols: currencyIn + ',' + currencyOut}});
  }

}