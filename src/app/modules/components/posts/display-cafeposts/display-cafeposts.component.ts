import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../../shared/models/post';
import { } from 'rxjs';
import { Cafe } from '../../../../shared/models/cafe';

@Component({
  selector: 'app-display-cafeposts',
  templateUrl: './display-cafeposts.component.html',
  styleUrls: ['./display-cafeposts.component.css']
})
export class DisplayCafepostsComponent implements OnInit {
  @Input() token: number;
  
  private postsRoute = 'http://localhost:3000/posts';
  accountsRoute = 'http://localhost:3000/accounts';
  public posts: Post[];
  accounts: Account[];
  postObj = {};
  id: number;

  private cafesRoute = 'http://localhost:3000/cafes';
  public cafe: Cafe;
  @Input() cafeId: number;

  constructor(private http: HttpClient) { }
  getCafePosts(){
    this.http.get<Post[]>(this.postsRoute + "?cafeId=" + this.cafeId).subscribe(posts => {
      this.posts = posts;
    });
  }
  show = false;
  
  getCafe(){
    this.http.get<Cafe>(this.cafesRoute + "?cafeId=" + this.cafeId).subscribe(cafe => {
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
