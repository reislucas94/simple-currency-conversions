import { Component, OnInit } from '@angular/core';
import { ConversionService } from 'src/app/_services/conversion.service';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.css']
})
export class HistoryTableComponent {

  conversions = [];
  loadingIndicator = true;
  columns = [];
 

  constructor(conversionService: ConversionService) {
    this.columns = [
      { name: 'InputValue', sortable: true }, 
      { name: 'InputCurrency', sortable: true }, 
      { name: 'OutputCurrency', sortable: true} , 
      { name: 'OutputValue', sortable: true }, 
      { name: 'ConvertedAt', sortable: true}
    ];

    conversionService.getLast10Conversions().subscribe(data=>{
      this.conversions = data;
    })
  }

}
