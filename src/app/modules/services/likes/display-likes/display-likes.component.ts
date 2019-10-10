import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Like } from '../../../../shared/models/like';

@Component({
  selector: 'app-display-likes',
  templateUrl: './display-likes.component.html',
  styleUrls: ['./display-likes.component.css']
})
export class DisplayLikesComponent implements OnInit {
  @Input() postid: number; 
  private likesRoute = 'http://localhost:3000/likes';
  public likes: Like [];

  constructor(private http: HttpClient) { }
  getLikes(postid){
    this.http.get<Like[]>(this.likesRoute + "?postid=" + postid).subscribe(likes => {
      this.likes = likes;
    })
  }
// doesn't reload whenever there is a change in the database

  ngOnInit() {
    this.getLikes(this.postid);
  }

}
