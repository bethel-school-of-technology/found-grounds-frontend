import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-display-profilepage',
  templateUrl: './display-profilepage.component.html',
  styleUrls: ['./display-profilepage.component.css']
})
export class DisplayProfilepageComponent implements OnInit {
  token=1
  public param;
  public user: User;
  private userRoute = 'http://localhost:3000/users';

  constructor( private route: ActivatedRoute, private http: HttpClient) { }
  getUser(username){
    this.http.get<User>(this.userRoute + "?deleted=false&username=" + username).subscribe(user => {
      this.user = user;
    });
  }

  showBox(id){
    var x = document.getElementById(id);
    if (x.className.indexOf("show") == -1) {
      x.className += " show";
      x.previousElementSibling.className += " w3-theme-d1";
    } else {
      x.className = x.className.replace("show", "");
      x.previousElementSibling.className =
      x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
  }

  ngOnInit() {
    let param = this.route.snapshot.paramMap.get('username')
    this.getUser(param);
  }

}
