import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../../../../shared/models/photo';

@Component({
  selector: 'app-photobox',
  templateUrl: './photobox.component.html',
  styleUrls: ['./photobox.component.css']
})
export class PhotoboxComponent implements OnInit {
  @Input() cafeId: number;
  private photosRoute = 'http://localhost:3000/photos';
  public images: Photo [];
  constructor( private http: HttpClient) { }
  getPhotos(){
    this.http.get<Photo[]>(this.photosRoute + "?cafeId=" + this.cafeId).subscribe(images => {
      this.images = images;
    });
  }

  ngOnInit() {
    this.getPhotos();
  }

}
