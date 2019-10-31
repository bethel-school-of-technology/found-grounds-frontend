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

  private postsRoute = 'http://localhost:8080/api/posts';
  usersRoute = 'http://localhost:8080/api/users';
  public posts: Post[];
  users: User[];
  postObj = {};
  id: number;

  constructor(private http: HttpClient) { }
  // + "?deleted=false"
  getPosts() {
    this.http.get<Post[]>(this.postsRoute ).subscribe(posts => {
      this.posts = posts.filter(posts => posts.deleted == false);
    })
      ;
  }

  show = false;

  
  showComments(id){
    var x = document.getElementById(id);
    if (x.className.indexOf("show") == -1) {
      x.className += " show";
      x.previousElementSibling.className += " w3-theme-d1";
    } else {
      x.className = x.className.replace("show", "");
      x.previousElementSibling.className =
      x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
  }
  

  ngOnInit() {
    this.getPosts()

  };
}