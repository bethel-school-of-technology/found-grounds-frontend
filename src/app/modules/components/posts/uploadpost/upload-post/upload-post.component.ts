import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Post } from '../../../../../shared/models/post';
import { Shop } from '../../../../../shared/models/shop';
import * as moment from 'moment';

@Component({
  selector: 'app-upload-post',
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.css']
})
export class UploadPostComponent implements OnInit {
  @Input() userId: number;


  ngOnInit() {
   ;
  }

}
