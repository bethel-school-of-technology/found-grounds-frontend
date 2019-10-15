import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../../../shared/models/comment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reviewbox',
  templateUrl: './reviewbox.component.html',
  styleUrls: ['./reviewbox.component.css']
})
export class ReviewboxComponent implements OnInit {
  @Input() cafeId: number;
  @Input() userId: number;
  constructor() { }

  ngOnInit() {
  }

}
