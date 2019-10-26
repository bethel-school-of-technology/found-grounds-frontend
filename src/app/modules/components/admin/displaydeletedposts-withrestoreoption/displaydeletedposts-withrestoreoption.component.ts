import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../../shared/models/post';
import { } from 'rxjs';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-displaydeletedposts-withrestoreoption',
  templateUrl: './displaydeletedposts-withrestoreoption.component.html',
  styleUrls: ['./displaydeletedposts-withrestoreoption.component.css']
})
export class DisplaydeletedpostsWithrestoreoptionComponent implements OnInit {
  @Input() token: number;

  private postsRoute = 'http://localhost:3000/posts';
  usersRoute = 'http://localhost:3000/users';
  public posts: Post[];
  users: User[];
  postObj = {};
  id: number;

  constructor(private http: HttpClient) { }
  getDeletedPosts() {
    this.http.get<Post[]>(this.postsRoute + "?deleted=true").subscribe(posts => {
      this.posts = posts;
    })
      ;
  }

  show = false;

  
  showComments(id) {
    console.log(id);
    document.getElementById(id).style.display = 'block';
  }

  restorePost(post){
    if(confirm("Are you sure?")){
      const restoredObj = {
        "text": post.text,
        "userId": post.userId,
        "id": post.id,
        "imageUrl": post.imageUrl,
        "timePosted": post.timePosted,
        "shopId": post.shopId,
        "deleted": false
      }
      const url = `${this.postsRoute}/${post.id}`;
      return this.http.put(url, restoredObj)
      .toPromise().then(()=> {this.getDeletedPosts()})
    }
  }

  ngOnInit() {
    this.getDeletedPosts()

  };
}