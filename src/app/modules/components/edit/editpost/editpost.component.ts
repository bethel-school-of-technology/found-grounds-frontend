import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../../shared/models/post';
import { } from 'rxjs';
import { Shop } from '../../../../shared/models/shop';
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

  

  private cafesRoute = 'http://localhost:3000/cafes?deleted=false';
  public cafes: Shop[];
  getCafe(){
    this.http.get<Shop[]>(this.cafesRoute).subscribe(cafes => {
      this.cafes = cafes;
    });
  }

  ngOnInit() {
    this.getPost(this.postid);
    this.getCafe();

  };
} 