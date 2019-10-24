import { Component, OnInit, Input} from '@angular/core';
import { Comment } from '../../../../shared/models/comment';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.css']
})
export class CommentboxComponent implements OnInit {
  @Input() postId: number;
  @Input() token: number;
  
  private commentsRoute = 'http://localhost:3000/comments';
  public comments : Comment [];

  constructor(private http: HttpClient) { }
  // Getting Comments
  getComments(postId){
    this.http.get<Comment[]>(this.commentsRoute + "?postId=" + postId).subscribe(comments => {
      this.comments = comments;
    })
  }

  // Uploading Comments
  public commentToPost: Comment;
  isAdded: boolean = false;
  confirmationString: string = "New comment has been uploaded";
  uploadNewComment(comment){
    this.commentToPost = {
      "text": comment.text,
      "postId": this.postId,
      "userId": this.token,
      "commentId": comment.id,
      "id": comment.id,
      "deleted": false,
      "timePosted": moment()
    }
    this.http.post(this.commentsRoute, this.commentToPost)
    .subscribe(res => (this.isAdded = true));
    this.ngOnInit();
    // .then(()=>{ this.router.navigate([`/${this.id}`])})
    // add above code once router is done
    ;
  }
  ngOnInit() {
    this.getComments(this.postId);
  };

 

}
