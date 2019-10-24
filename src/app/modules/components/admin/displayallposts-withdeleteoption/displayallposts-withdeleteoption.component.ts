import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../../shared/models/post';
import { } from 'rxjs';

@Component({
  selector: 'app-displayallposts-withdeleteoption',
  templateUrl: './displayallposts-withdeleteoption.component.html',
  styleUrls: ['./displayallposts-withdeleteoption.component.css']
})
export class DisplayallpostsWithdeleteoptionComponent implements OnInit {
  @Input() token: number;

  private postsRoute = 'http://localhost:3000/posts';
  accountsRoute = 'http://localhost:3000/accounts';
  public posts: Post[];
  accounts: Account[];
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

  deletePost(post){
    if(confirm("Are you sure?")){
      const deletedObj = {
        "text": post.text,
        "userId": post.userId,
        "id": post.id,
        "image_url": post.image_url,
        "timePosted": post.timePosted,
        "shopId": post.shopId,
        "deleted": true
      }
      const url = `${this.postsRoute}/${post.id}`;
      return this.http.put(url, deletedObj)
      .toPromise().then(()=> {this.getPosts()})
    }
  }

  ngOnInit() {
    this.getPosts()

  };
}