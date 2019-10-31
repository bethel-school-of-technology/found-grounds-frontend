import { Component, OnInit, Input} from '@angular/core';
import { Comment } from '../../../../shared/models/comment';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.css']
})
export class CommentboxComponent implements OnInit {
  @Input() postId: number;
  @Input() token: number;
  
  private commentsRoute = 'http://localhost:8080/api/comments';
  public comments : Comment [];

  constructor(private http: HttpClient) { }

  // + "?deleted=false&postId=" + postId
  getComments(postId){
    this.http.get<Comment[]>(this.commentsRoute).subscribe(comments => {
      this.comments = comments.filter(comments => comments.deleted == false && comments.postId == postId);
    })
  }

  private usersRoute = 'http://localhost:8080/api/users'
  public user: User[];

  //  + "?deleted=false&userId=" + token
  refreshUser(token){
  this.http.get<User[]>(this.usersRoute).subscribe(user => {
    this.user = user.filter(user => user.deleted == false && user.userId == token);
  })
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
        "commentId": comment.commentId,
        "deleted": true,
        "timePosted": moment()
      }
      const url = `${this.commentsRoute}/${comment.commentId}`;
        return this.http.put(url, this.commentToDelete)
        .toPromise().then(()=> { this.ngOnInit()})
    }
  }

  ngOnInit() {
    this.getComments(this.postId);
    this.refreshUser(this.token);
  };

}
