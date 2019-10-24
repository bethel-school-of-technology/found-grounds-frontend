import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Post } from '../../../../../shared/models/post';
import { Shop } from '../../../../../shared/models/shop';
import * as moment from 'moment';

@Component({
  selector: 'app-upload-post',
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.css']
})
export class UploadPostComponent implements OnInit {
  @Input() userId: number;

  selectedFile: File = null;

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
      // still needs to be filled
    // https://www.youtube.com/watch?v=YkvqLNcJz3Y&t=32s is a resource
    // this.image_url = "res.image_url"
  };
 
  constructor( private http: HttpClient) { }

  // Posts
  postsRoute = 'http://localhost:3000/posts';
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
      "image_url": this.image_url,
      "deleted": false,
      // this simulates loggin in
      "userId": this.userId,
      "shopId": post.shopId
    }
    this.http.post("http://localhost:3000/posts", this.post)
    .subscribe(res => (this.isAdded = true))
    .toPromise()
    // .then(()=>{ this.router.navigate([`/${this.id}`])})
    // add above code once router is done
    ;
  }

  private cafesRoute = 'http://localhost:3000/cafes?deleted=false';
  public cafes: Shop[];
  getCafe(){
    this.http.get<Shop[]>(this.cafesRoute).subscribe(cafes => {
      this.cafes = cafes;
    });
  }

  ngOnInit() {
    this.getCafe();
  }

}
