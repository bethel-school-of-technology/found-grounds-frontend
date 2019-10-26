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
  
  private commentsRoute = 'http://localhost:3000/comments';
  public comments : Comment [];

  constructor(private http: HttpClient) { }
  // Getting Comments
  getComments(postId){
    this.http.get<Comment[]>(this.commentsRoute + "?deleted=false&postId=" + postId).subscribe(comments => {
      this.comments = comments;
    })
  }

  private usersRoute = 'http://localhost:3000/users'
  public user: User;
  refreshUser(token){
  this.http.get<User>(this.usersRoute + "?deleted=false&userId=" + token).subscribe(user => {
    this.user = user;
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
    this.refreshUser(this.token);
  };

}
