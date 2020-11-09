import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LatestOpenExchangeRatesResponse } from '../_models/latestOpenExchangeRatesResponse.model';
import { CurrencyConversion } from '../_models/currencyConversion.model';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {
  backendBaseUrl = 'http://localhost:5000/api/Conversion';

  constructor(private http: HttpClient) { }

  public getLast10Conversions() {
    return this.http.get<Array<CurrencyConversion>>(`${this.backendBaseUrl}/last10`);
  }

  public convert(conversion) {
    return this.http.post(`${this.backendBaseUrl}/convert`, conversion);
  }
}
