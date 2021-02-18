import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  selectedDate :any;
  dateinFormat:any;
  datePickerConfig = {
    format: 'MMM DD, YYYY'
  };
  constructor() { }

  ngOnInit(): void {
  }

  getDate(value:any){
    console.log('selected date..', value.inputElementValue);
    this.dateinFormat = value.inputElementValue;
    console.log(this.dateinFormat);
  }

}
