import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../../shared/models/post';
import { } from 'rxjs';

@Component({
  selector: 'app-display-profileposts',
  templateUrl: './display-profileposts.component.html',
  styleUrls: ['./display-profileposts.component.css']
})
export class DisplayProfilepostsComponent implements OnInit {
  // To replace with token
  @Input() token: number;

  // posts and accounts
  private postsRoute = 'http://localhost:3000/posts';
  public posts: Post[];
  postObj = {};
  id: number;

  // pull username
  @Input() profileId: number;
  @Input() firstname: string;

  constructor(private http: HttpClient) { }

  getUserPosts(){
    this.http.get<Post[]>(this.postsRoute + "?userId=" + this.profileId).subscribe(posts => {
      this.posts = posts;
    });
  }
  show = false;


  showComments(id){
    console.log(id);
    document.getElementById(id).style.display = 'block';
  }

  ngOnInit() {
    this.getUserPosts();
  }

}
