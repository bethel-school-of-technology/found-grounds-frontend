import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../../shared/models/post';
import { } from 'rxjs';
import { User } from '../../../../shared/models/user';
import { Shop } from '../../../../shared/models/shop';
import * as moment from 'moment';

@Component({
  selector: 'app-display-profileposts',
  templateUrl: './display-profileposts.component.html',
  styleUrls: ['./display-profileposts.component.css']
})
export class DisplayProfilepostsComponent implements OnInit {
  @Input() token: number;
  @Input() profileId: number;

  private postsRoute = 'http://localhost:3000/posts';
  usersRoute = 'http://localhost:3000/users';
  public posts: Post[];
  users: User[];
  postObj = {};
  id: number;
  public editing = "editing";

  constructor(private http: HttpClient) { }
  // Getting Component of Posts
  getPosts(){
    this.http.get<Post[]>(this.postsRoute + "?deleted=false&userId=" + this.profileId).subscribe(posts => {
      this.posts = posts.slice().reverse();
    })
    ;
  }
  show = false;

  // Comments Component of Posts
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
 
//  Editing Component of Posts
 showBox(id,unique){
  console.log(id + unique);
  document.getElementById(id + unique).style.display = 'block';
}

closeBox(id,unique){
  console.log(id + unique);
  document.getElementById(id + unique).style.display='none';
}

// Selecting Cafes Component
private cafesRoute = 'http://localhost:3000/cafes?deleted=false';
public cafes: Shop[];
getCafe(){
  this.http.get<Shop[]>(this.cafesRoute).subscribe(cafes => {
    this.cafes = cafes;
  });
}

// Delete Posts Component
deletePost(post){
  if(confirm("Are you sure?")){
    const deletedObj = {
      "text": post.text,
      "userId": post.userId,
      "id": post.id,
      "imageUrl": post.imageUrl,
      "timePosted": post.timePosted,
      "shopId": post.shopId,
      "deleted": true
    }
    const url = `${this.postsRoute}/${post.id}`;
    return this.http.put(url, deletedObj)
    .toPromise().then(()=> {this.getPosts()})
  }
}

// Edit Posts Component
editPost = function(newpost, oldpost){
  const editedObj = {
    "text": newpost.text,
    "shopId": newpost.shopId,
    "userId": oldpost.userId,
    "timePosted": oldpost.timePosted,
    "id": oldpost.id,
    "imageUrl": oldpost.imageUrl,
    "deleted": false,
    "edited": true}
    const url = `${this.postsRoute}/${oldpost.id}`;
    return this.http.put(url, editedObj)
    .toPromise().then(()=> {this.getPosts()})
  }

  ngOnInit() {
    this.getPosts()
    this.getCafe()
  };
}
