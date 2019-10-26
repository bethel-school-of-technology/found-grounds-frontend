import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Like } from '../../../../shared/models/like';
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
  private likesRoute = 'http://localhost:3000/likes';
  public likes: Like [];
  public userLike: Like;

  constructor(private http: HttpClient) { }
  public likeToPost: Like;
  public toggleToPost: Like;
  isAdded: boolean = false;
  confirmationString: string = "New like has been uploaded";

  getLikes(postId){
    this.http.get<Like[]>(this.likesRoute + "?postId=" + postId + "&like=true").subscribe(likes => {
      this.likes = likes;
    })
  }

  getUserLike(postId){
    this.http.get<Like>(this.likesRoute + "?postId=" + postId + "&userId=" + this.token).subscribe(userLike => {
      this.userLike = userLike;
    })
  }

  onClickPostLike(){
    this.likeToPost = {
      "userId": this.token,
      "postId": this.postId,
      "like": true,
      "id": this.postId + 5453 + this.token,
      "likeId": this.postId + 5453 + this.token
    }
    this.http.post(this.likesRoute, this.likeToPost).subscribe(res => (this.isAdded = true));
    this.ngOnInit();
; }

onClickToggle(userLik){
  this.toggleToPost = {
    "userId": this.token,
    "postId": this.postId,
    "id": this.postId + 5453 + this.token,
    "like": userLik.like = !userLik.like,
    "likeId": this.postId + 5453 + this.token
  }
  const url = `${this.likesRoute}/${userLik.id}`;
  this.http.put(url, this.toggleToPost).subscribe(res => (this.isAdded = true));
  this.ngOnInit();
; }

  ngOnInit() {
    this.getLikes(this.postId);
    this.getUserLike(this.postId);
  }

}
