import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../../shared/models/post';
import { } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-userscafes',
  templateUrl: './display-userscafes.component.html',
  styleUrls: ['./display-userscafes.component.css']
})
export class DisplayUserscafesComponent implements OnInit {
  // To replace with token
  @Input() userId: number;

  // posts and users
  private postsRoute = 'http://localhost:3000/posts';
  public cafes: Post[];
  postObj = {};
  id: number;

  // pull username
  @Input() profileId: number;
  @Input() firstname: string;

  constructor(private http: HttpClient, private router: Router) { }

  getUserPosts(){
    this.http.get<Post[]>(this.postsRoute + "?userId=" + this.profileId).subscribe(cafes => {
      this.cafes = cafes;
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

  onSelect(post){
    this.router.navigate(['/cafes', post.shopId]);
  }
}