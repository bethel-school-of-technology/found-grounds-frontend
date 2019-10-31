import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../../shared/models/post';
import { } from 'rxjs';
import { Shop } from '../../../../shared/models/shop';
import { User } from '../../../../shared/models/user';
import * as moment from 'moment';

@Component({
  selector: 'app-display-cafeposts',
  templateUrl: './display-cafeposts.component.html',
  styleUrls: ['./display-cafeposts.component.css']
})
export class DisplayCafepostsComponent implements OnInit {
  @Input() token: number;
  @Input() shopId: number;

  private postsRoute = 'http://localhost:8080/api/posts';
  usersRoute = 'http://localhost:8080/api/users';
  public posts: Post[];
  users: User[];
  postObj = {};
  public editing = "editing";

  constructor(private http: HttpClient) { }
  // Getting Component of Posts
  // + "?deleted=false&shopId=" + this.shopId
  getCafePosts(){
    this.http.get<Post[]>(this.postsRoute).subscribe(posts => {
      this.posts = posts.filter(posts => posts.deleted == false && posts.shopId == this.shopId).slice().reverse();
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

// Uploading Photos Component - Not Yet Done
selectedFile: File = null;
onFileSelected(event){
  this.selectedFile = <File>event.target.files[0];
  console.log(event);
  // https://www.youtube.com/watch?v=YkvqLNcJz3Y&t=32s is a resource
  // this.imageUrl = "res.imageUrl"
};

// Uploading Posts Component
public post: Post;
isAdded: boolean = false;
confirmationString: string = "New post has been uploaded";
uploadPost = function(post){
  this.post = {
    "text": post.text,
    "postId": post.id,
    "id": post.id,
    "timePosted": moment(), 
    // image url data will be passed on from onFileSelected
    "imageUrl": this.imageUrl,
    "deleted": false,
    "userId": this.token,
    "shopId": post.shopId
  }
  this.http.post(this.postsRoute, this.post).toPromise().then(()=>{this.ngOnInit()})
}

// Uploading Cafes Component
private cafesRoute = 'http://localhost:8080/api/shops';
public cafes: Shop[];
// "?deleted=false" + "&shopId=" + this.shopId 

getSpecificCafe(){
  this.http.get<Shop[]>(this.cafesRoute).subscribe(cafes => {
    this.cafes = cafes.filter(cafes => cafes.deleted == false && cafes.shopId == this.shopId);
  });
}

// Delete Posts Component
deletePost(post){
  if(confirm("Are you sure?")){
    const deletedObj = {
      "text": post.text,
      "userId": post.userId,
      "postId": post.postId,
      "imageUrl": post.imageUrl,
      "timePosted": post.timePosted,
      "shopId": post.shopId,
      "deleted": true
    }
    const url = `${this.postsRoute}/${post.postId}`;
    return this.http.put(url, deletedObj)
    .toPromise().then(()=> {this.getCafePosts()})
  }
}

// Edit Posts Component
editPost = function(newpost, oldpost){
  const editedObj = {
    "text": newpost.text,
    "shopId": newpost.shopId,
    "userId": oldpost.userId,
    "timePosted": oldpost.timePosted,
    "postId": oldpost.postId,
    "imageUrl": oldpost.imageUrl,
    "deleted": false,
    "edited": true}
    const url = `${this.postsRoute}/${oldpost.postId}`;
    return this.http.put(url, editedObj)
    .toPromise().then(()=> {this.getCafePosts()})
  }

  ngOnInit() {
    this.getCafePosts()
    this.getSpecificCafe()
  };
}
