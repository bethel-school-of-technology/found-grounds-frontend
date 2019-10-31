import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../../../../shared/models/menu';

@Component({
  selector: 'app-display-menu',
  templateUrl: './display-menu.component.html',
  styleUrls: ['./display-menu.component.css']
})
export class DisplayMenuComponent implements OnInit {
  @Input() shopId: number;
  private menusRoute = 'http://localhost:8080/api/menu';
  public menus: Menu [];

  constructor( private http:HttpClient) { }
  // + "?deleted=false&shopId=" + this.shopId
  getMenus(){
    this.http.get<Menu[]>(this.menusRoute ).subscribe(menus => {
      this.menus = menus.filter(menus => menus.deleted == false && menus.shopId == this.shopId);
    });
  }
  ngOnInit() {
    this.getMenus();
  }

}
