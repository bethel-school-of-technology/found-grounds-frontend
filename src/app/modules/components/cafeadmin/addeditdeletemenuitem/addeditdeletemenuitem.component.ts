import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../../../../shared/models/menu';

@Component({
  selector: 'app-addeditdeletemenuitem',
  templateUrl: './addeditdeletemenuitem.component.html',
  styleUrls: ['./addeditdeletemenuitem.component.css']
})
export class AddeditdeletemenuitemComponent implements OnInit {
  @Input() shopId: number;
  private menusRoute = 'http://localhost:3000/menu';
  public menus: Menu [];
  public editing = "editmenu";

  constructor( private http:HttpClient) { }
  getMenus(){
    this.http.get<Menu[]>(this.menusRoute + "?deleted=false&shopId=" + this.shopId).subscribe(menus => {
      this.menus = menus;
    });
  }

  deleteMenu(menu){
      const deletedMenu = {
        "shopId": this.shopId,
        "itemId": menu.itemId,
        "name": menu.name,
        "imageUrl": menu.imageUrl,
        "id": menu.id,
        "text": menu.text,
        "deleted": true
      }
      const url = `${this.menusRoute}/${menu.id}`;
      return this.http.put(url, deletedMenu)
      .toPromise().then(()=>{this.ngOnInit()})
  }

  editMenu(menu, newMenu){
    const editedMenu = {
      "shopId": this.shopId,
      "itemId": menu.itemId,
      "name": newMenu.name,
      "imageUrl": newMenu.imageUrl,
      "id": menu.id,
      "text": newMenu.text,
      "deleted": false
    }
    const url = `${this.menusRoute}/${menu.id}`;
    return this.http.put(url, editedMenu)
    .toPromise().then(()=>{this.ngOnInit()})
}

addMenu(menu){
  const newMenu = {
    "shopId": this.shopId,
    "itemId": menu.itemId,
    "name": menu.name,
    "imageUrl": menu.imageUrl,
    "id": menu.id,
    "text": menu.text,
    "deleted": false
  }
  return this.http.post(this.menusRoute, newMenu)
  .toPromise().then(()=>{this.ngOnInit()})
}

  showBox(menu){
    var x = document.getElementById(menu.itemId + this.editing);
    x.style.display = 'block';
  }

  closeBox(menu){
    var x = document.getElementById(menu.itemId + this.editing);
    x.style.display = 'none';
  }

  showAddBox(){
    var x = document.getElementById("newMenu");
    x.style.display = 'block';
  }

  closeAddBox(){
    var x = document.getElementById("newMenu");
    x.style.display = 'none';
  }

  ngOnInit() {
    this.getMenus();
  }

}