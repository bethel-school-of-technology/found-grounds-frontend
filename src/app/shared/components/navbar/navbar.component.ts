import { Component, OnInit } from '@angular/core';
import { LoginmodalComponent } from '../loginmodal/loginmodal.component';
import { HttpClient } from '@angular/common/http';
import { FakeJWT } from '../../models/fakeJWT';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public token
  constructor(private http: HttpClient) { }
  getTokenService(){
    this.http.get<FakeJWT[]>('http://localhost:3000/token').subscribe(token => {
      this.token = token;
    })
  }

  showBox(){
    var x = document.getElementById('navDemo');
    if (x.className.indexOf("show") == -1) {
      x.className += " show";
      x.previousElementSibling.className += " w3-theme-d1";
    } else {
      x.className = x.className.replace("show", "");
      x.previousElementSibling.className =
      x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
  }
  
  showsmallLogin(){
    document.getElementById('id01').style.display='block';
    var x = document.getElementById('navDemo');
    if (x.className.indexOf("show") == -1) {
      x.className += " show";
      x.previousElementSibling.className += " w3-theme-d1";
    } else {
      x.className = x.className.replace("show", "");
      x.previousElementSibling.className =
      x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
  }

  showsmallLogout(){
    document.getElementById('x02').style.display='block';
    var x = document.getElementById('navDemo');
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
    this.getTokenService();
  }
  
}
