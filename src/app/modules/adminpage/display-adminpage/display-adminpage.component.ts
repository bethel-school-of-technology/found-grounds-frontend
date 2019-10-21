import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-display-adminpage',
  templateUrl: './display-adminpage.component.html',
  styleUrls: ['./display-adminpage.component.css']
})
export class DisplayAdminpageComponent implements OnInit {

  public token=1

  public CurrentDate = moment();
  public FromNow = moment("2019-10-11 15:00:00").fromNow()
 
  
  constructor() { }

  ngOnInit() {
    console.log(this.CurrentDate);
    console.log(this.FromNow);
    console.log( )

  }

}
