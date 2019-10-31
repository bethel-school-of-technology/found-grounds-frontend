import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoutmodal',
  templateUrl: './logoutmodal.component.html',
  styleUrls: ['./logoutmodal.component.css']
})
export class LogoutmodalComponent implements OnInit {

  public loggedon;

  constructor( private http: HttpClient , private router: Router) { }

  login = function(loginData){
    const loggedon = {
      "id": 1,
    }
    const url = "http://localhost:3000/token/1";
    return this.http.put(url, loggedon)
    .toPromise().then(()=> {this.router.navigate(['home']);
    document.getElementById('x02').style.display='none';
  })
  }

  ngOnInit() {
  }

}
