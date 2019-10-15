import { Component, OnInit, Input} from '@angular/core';
import { Comment } from '../../../../shared/models/comment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.css']
})
export class CommentboxComponent implements OnInit {
  @Input() postid: number;
  @Input() userId: number;
  
  constructor() { }

  ngOnInit() {
  }

}
