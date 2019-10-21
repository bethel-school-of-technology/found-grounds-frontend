import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../../shared/models/post';

import * as moment from 'moment';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {
  @Input() timestamp: string;
  public timeFrom;

  constructor() { }
  getTime(timestamp){
    return this.timeFrom = moment(timestamp).fromNow()
  }
  
  ngOnInit() {
    this.getTime(this.timestamp);
  }
  
}