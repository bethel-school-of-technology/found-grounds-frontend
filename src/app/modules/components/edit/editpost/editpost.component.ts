import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../../shared/models/post';
import { } from 'rxjs';
import { Cafe } from '../../../../shared/models/cafe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  @Input() postid;
  private postsRoute = 'http://localhost:3000/posts';
  public post: Post;
  updatedObj = {};

  constructor(private http: HttpClient, private router: Router) { }
  getPost(postid) {
    this.http.get<Post>(this.postsRoute + "?deletedfalse&id=" + postid).subscribe(post => {
      this.post = post;
    })}

  editPost(editData){
    if(confirm("Are you sure?")){
      const updatedObj = {
        "text": editData.text,
        "userId": this.post[0].userId,
        "id": this.post[0].id,
        "image_url": this.post[0].image_url,
        "timePosted": this.post[0].timePosted,
        "cafeId": editData.cafeId,
        "deleted": false,
        "edited": true,
      }
      const url = `${this.postsRoute}/${this.postid}`;
      return this.http.put(url, updatedObj).toPromise().then(()=>{
        this.router.navigate(['dailybrew'])
      })}}

  private cafesRoute = 'http://localhost:3000/cafes?deleted=false';
  public cafes: Cafe[];
  getCafe(){
    this.http.get<Cafe[]>(this.cafesRoute).subscribe(cafes => {
      this.cafes = cafes;
    });
  }

  ngOnInit() {
    this.getPost(this.postid);
    this.getCafe();

  };
}