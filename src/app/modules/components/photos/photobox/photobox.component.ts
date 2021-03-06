import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../../../../shared/models/photo';

@Component({
  selector: 'app-photobox',
  templateUrl: './photobox.component.html',
  styleUrls: ['./photobox.component.css']
})
export class PhotoboxComponent implements OnInit {
  @Input() shopId: number;
  private photosRoute = 'http://localhost:8080/api/photos';
  public images: Photo [];
  constructor( private http: HttpClient) { }
  // + "?shopId=" + this.shopId
  getPhotos(){
    this.http.get<Photo[]>(this.photosRoute).subscribe(images => {
      this.images = images.filter(images => images.shopId == this.shopId);
    });
  }

  ngOnInit() {
    this.getPhotos();
  }

}
