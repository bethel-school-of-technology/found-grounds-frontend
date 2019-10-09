import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Like } from '../../../../shared/models/like';
import { DisplayLikesComponent } from '../display-likes/display-likes.component';

@Component({
  providers: [DisplayLikesComponent],
  selector: 'app-toggle-like',
  templateUrl: './toggle-like.component.html',
  styleUrls: ['./toggle-like.component.css']
})
export class ToggleLikeComponent implements OnInit {
  @Input() postid : number;
  @Input() userId : number;

  constructor(private http: HttpClient, private comp: DisplayLikesComponent, ) { }
  private likesRoute = 'http://localhost:3000/likes';
  public like: Like
  isAdded: boolean = false;
  confirmationString: string = "New like has been uploaded";

  // currently unable to toggle, only like
  // button should look pressed when like is set to true
  onClickLike(){
    this.like = {
      "userId": this.userId,
      "postid": this.postid,
      "like": true,
    }
    this.http.post(this.likesRoute, this.like).subscribe(res => (this.isAdded = true));
    this.comp.getLikes(this.postid);
    this.comp.ngOnInit();
 this.ngOnInit();
; }

  ngOnInit() {

  }

}
