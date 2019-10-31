import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThumbsUp } from '../../../../shared/models/thumbsup';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  providers: [],
  selector: 'app-toggle-like',
  templateUrl: './toggle-like.component.html',
  styleUrls: ['./toggle-like.component.css']
})
export class ToggleLikeComponent implements OnInit {
  @Input() postId : number;
  @Input() token : number;
  private likesRoute = 'http://localhost:8080/api/thumbsup';
  public likes: ThumbsUp [];
  public userLike: ThumbsUp[];

  constructor(private http: HttpClient) { }
  public likeToPost: ThumbsUp;
  public toggleToPost: ThumbsUp;
  isAdded: boolean = false;
  confirmationString: string = "New like has been uploaded";

  // + "?postId=" + postId + "&thumbsUp=true"
  getLikes(postId){
    this.http.get<ThumbsUp[]>(this.likesRoute).subscribe(likes => {
      this.likes = likes.filter(likes => likes.postId == postId && likes.thumbsUp == true);
    })
  }

  //  + "?postId=" + postId + "&userId=" + this.token
  getUserLike(postId){
    this.http.get<ThumbsUp[]>(this.likesRoute).subscribe(userLike => {
      this.userLike = userLike.filter(userLike => userLike.postId == postId && userLike.userId == this.token);
    })
  }

  onClickPostLike(){
    this.likeToPost = {
      "userId": this.token,
      "postId": this.postId,
      "thumbsUp": true,
      "thumbsUpId": null
    }
    this.http.post(this.likesRoute, this.likeToPost).toPromise().then(()=>{this.ngOnInit()})
; }

onClickToggle(userLik){
  this.toggleToPost = {
    "userId": this.token,
    "postId": this.postId,
    "thumbsUp": userLik.thumbsUp = !userLik.thumbsUp,
    "thumbsUpId": userLik.thumbsUpId
  }
  const url = `${this.likesRoute}/${userLik.thumbsUpId}`;
  this.http.put(url, this.toggleToPost).toPromise().then(()=>{this.ngOnInit()})
; }

  ngOnInit() {
    this.getUserLike(this.postId);
    this.getLikes(this.postId);
  }

}
