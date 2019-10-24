import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Comment } from '../../../../shared/models/comment';
import * as moment from 'moment';

@Component({
  selector: 'app-upload-comments',
  templateUrl: './upload-comments.component.html',
  styleUrls: ['./upload-comments.component.css']
})
export class UploadCommentsComponent implements OnInit {
  @Input() token: number;
  @Input() postId: number;

  constructor(private http: HttpClient) { }

  // Comments
  private commentsRoute = 'http://localhost:3000/comments';
  public comment: Comment;
  isAdded: boolean = false;
  confirmationString: string = "New comment has been uploaded";
  uploadNewComment(comment){
    this.comment = {
      "text": comment.text,
      "postId": this.postId,
      "userId": this.token,
      "commentId": comment.id,
      "id": comment.id,
      "deleted": false,
      "timePosted": moment()
    }
    this.http.post(this.commentsRoute, this.comment)
    .subscribe(res => (this.isAdded = true));
    this.ngOnInit();
    // .then(()=>{ this.router.navigate([`/${this.id}`])})
    // add above code once router is done
    ;
  }
  ngOnInit() {
  }

}
