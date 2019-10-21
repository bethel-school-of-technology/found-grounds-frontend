import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../../shared/models/post';
import { } from 'rxjs';

@Component({ 
  selector: 'app-display-posts',
  templateUrl: './display-posts.component.html',
  styleUrls: ['./display-posts.component.css']
})

export class DisplayPostsComponent implements OnInit {
  @Input() token: number;

  private postsRoute = 'http://localhost:3000/posts';
  accountsRoute = 'http://localhost:3000/accounts';
  public posts: Post[];
  accounts: Account[];
  postObj = {};
  id: number;

  constructor(private http: HttpClient) { }
  getPosts(){
    this.http.get<Post[]>(this.postsRoute + "?deleted=false").subscribe(posts => {
      this.posts = posts;
    })
    ;
  }
  
  show = false;

 showComments(id){
   console.log(id);
   document.getElementById(id).style.display = 'block';
 }

  ngOnInit() {
    this.getPosts()
    
  };
}
