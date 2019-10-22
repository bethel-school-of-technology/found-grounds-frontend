import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../../shared/models/post';
import { } from 'rxjs';

@Component({
  selector: 'app-displaydeletedposts-withrestoreoption',
  templateUrl: './displaydeletedposts-withrestoreoption.component.html',
  styleUrls: ['./displaydeletedposts-withrestoreoption.component.css']
})
export class DisplaydeletedpostsWithrestoreoptionComponent implements OnInit {
  @Input() token: number;

  private postsRoute = 'http://localhost:3000/posts';
  accountsRoute = 'http://localhost:3000/accounts';
  public posts: Post[];
  accounts: Account[];
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
        "image_url": post.image_url,
        "timePosted": post.timePosted,
        "cafeId": post.cafeId,
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