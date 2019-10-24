import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../../shared/models/post';
import { } from 'rxjs';
import { Shop } from '../../../../shared/models/shop';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-display-cafeposts',
  templateUrl: './display-cafeposts.component.html',
  styleUrls: ['./display-cafeposts.component.css']
})
export class DisplayCafepostsComponent implements OnInit {
  @Input() token: number;
  
  private postsRoute = 'http://localhost:3000/posts';
  usersRoute = 'http://localhost:3000/users';
  public posts: Post[];
  users: User[];
  postObj = {};
  id: number;

  private cafesRoute = 'http://localhost:3000/cafes';
  public cafe: Shop;
  @Input() shopId: number;

  constructor(private http: HttpClient) { }
  getCafePosts(){
    this.http.get<Post[]>(this.postsRoute + "?shopId=" + this.shopId + "&deleted=false").subscribe(posts => {
      this.posts = posts;
    });
  }
  show = false;
  
  getCafe(){
    this.http.get<Shop>(this.cafesRoute + "?shopId=" + this.shopId).subscribe(cafe => {
      this.cafe = cafe;
    });
  }

  showComments(id){
    console.log(id);
    document.getElementById(id).style.display = 'block';
  }

  ngOnInit() {
    this.getCafePosts();
    this.getCafe();
  }

}
