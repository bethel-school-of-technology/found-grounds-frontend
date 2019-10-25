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
public token2a: number;

  constructor(private http: HttpClient) { }
  // Getting Comments
  getComments(postId){
    this.http.get<Comment[]>(this.commentsRoute + "?deleted=false&postId=" + postId).subscribe(comments => {
      this.comments = comments;
    })
  }

  refreshToken(token){
    this.token2a = token
  }

  
  // Uploading Comments
  public commentToPost: Comment;
  public commentToDelete: Comment;

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
    .toPromise().then(()=> { this.ngOnInit()})
    ;
  }

  // Delete Comment
  deleteComment(comment){
    if(confirm("Are you sure?")){
      this.commentToDelete = {
        "text": comment.text,
        "postId": this.postId,
        "userId": this.token,
        "commentId": comment.id,
        "id": comment.id,
        "deleted": true,
        "timePosted": moment()
      }
      const url = `${this.commentsRoute}/${comment.id}`;
        return this.http.put(url, this.commentToDelete)
        .toPromise().then(()=> { this.ngOnInit()})
    }
  }

  ngOnInit() {
    this.getComments(this.postId);
    this.refreshToken(this.token)
  };

}
