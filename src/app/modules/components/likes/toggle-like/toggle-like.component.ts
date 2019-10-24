import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Like } from '../../../../shared/models/like';

@Component({
  providers: [],
  selector: 'app-toggle-like',
  templateUrl: './toggle-like.component.html',
  styleUrls: ['./toggle-like.component.css']
})
export class ToggleLikeComponent implements OnInit {
  @Input() postId : number;
  @Input() userId : number;
  private likesRoute = 'http://localhost:3000/likes';
  public likes: Like [];

  constructor(private http: HttpClient) { }
  public likeToPost: Like
  isAdded: boolean = false;
  confirmationString: string = "New like has been uploaded";

  getLikes(postId){
    this.http.get<Like[]>(this.likesRoute + "?postId=" + postId).subscribe(likes => {
      this.likes = likes;
    })
  }

  onClickLike(){
    this.likeToPost = {
      "userId": this.userId,
      "postId": this.postId,
      "like": true,
    }
    this.http.post(this.likesRoute, this.likeToPost).subscribe(res => (this.isAdded = true));
    this.ngOnInit();
; }

  ngOnInit() {
    this.getLikes(this.postId);
  }

}
