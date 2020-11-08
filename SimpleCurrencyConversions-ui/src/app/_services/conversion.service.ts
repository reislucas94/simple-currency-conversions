import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LatestOpenExchangeRatesResponse } from '../_models/latestOpenExchangeRatesResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  baseUrl = 'https://openexchangerates.org/api';
  appId = '803b49d404bb4dc9baf6091b9b97de8a';

  constructor(private http: HttpClient) { }

  public getValueInUSD(currency: string) : Observable<LatestOpenExchangeRatesResponse>{
    return this.http.get<LatestOpenExchangeRatesResponse>(`${this.baseUrl}/latest.json?symbols=${currency}&app_id=${this.appId}`)
  }

}
