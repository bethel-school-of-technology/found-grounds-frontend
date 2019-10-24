import { Component, OnInit, Input} from '@angular/core';
import { Comment } from '../../../../shared/models/comment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-comments',
  templateUrl: './display-comments.component.html',
  styleUrls: ['./display-comments.component.css']
})
export class DisplayCommentsComponent implements OnInit {
  @Input() postId: number;
  
  private commentsRoute = 'http://localhost:3000/comments';
  public comments : Comment [];

  constructor(private http: HttpClient) { }
  getComments(postId){
    this.http.get<Comment[]>(this.commentsRoute + "?postId=" + postId).subscribe(comments => {
      this.comments = comments;
    })
  }

  ngOnInit() {
    this.getComments(this.postId);
  };

 

}
