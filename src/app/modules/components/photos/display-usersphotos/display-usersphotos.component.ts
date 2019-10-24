import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../../shared/models/post';
import { } from 'rxjs';

@Component({
  selector: 'app-display-usersphotos',
  templateUrl: './display-usersphotos.component.html',
  styleUrls: ['./display-usersphotos.component.css']
})
export class DisplayUsersphotosComponent implements OnInit {
    // To replace with token
    @Input() userId: number;

    // posts and users
  private postsRoute = 'http://localhost:3000/posts';
  public images: Post[];
  id: number;

    // pull username
    @Input() profileId: number;
    @Input() firstname: string;

  constructor(private http: HttpClient) { }


  getUserPhotos(){
    this.http.get<Post[]>(this.postsRoute + "?userId=" + this.profileId).subscribe(images => {
      this.images = images;
    });
  }
  show = false;

  ngOnInit() {
    this.getUserPhotos();
  }

}
