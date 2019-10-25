import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../../shared/models/post';
import { } from 'rxjs';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-simplydisplayposts',
  templateUrl: './simplydisplayposts.component.html',
  styleUrls: ['./simplydisplayposts.component.css']
})
export class SimplydisplaypostsComponent implements OnInit {
  @Input() token: number;

  private postsRoute = 'http://localhost:3000/posts';
  usersRoute = 'http://localhost:3000/users';
  public posts: Post[];
  users: User[];
  postObj = {};
  id: number;

  constructor(private http: HttpClient) { }
  getPosts() {
    this.http.get<Post[]>(this.postsRoute + "?deleted=false").subscribe(posts => {
      this.posts = posts;
    })
      ;
  }

  show = false;

  
  showComments(id) {
    console.log(id);
    document.getElementById(id).style.display = 'block';
  }

  ngOnInit() {
    this.getPosts()

  };
}