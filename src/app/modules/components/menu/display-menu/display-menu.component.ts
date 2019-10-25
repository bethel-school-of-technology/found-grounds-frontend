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
  private menusRoute = 'http://localhost:3000/menu';
  public menus: Menu [];

  constructor( private http:HttpClient) { }
  getMenus(){
    this.http.get<Menu[]>(this.menusRoute + "?deleted=false&shopId=" + this.shopId).subscribe(menus => {
      this.menus = menus;
    });
  }
  ngOnInit() {
    this.getMenus();
  }

}
