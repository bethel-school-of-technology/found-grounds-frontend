import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpClient, HttpEventType, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginmodal',
  templateUrl: './loginmodal.component.html',
  styleUrls: ['./loginmodal.component.css']
})
export class LoginmodalComponent implements OnInit {

  public loggedon;

  constructor( private http: HttpClient , private router: Router) { }

  login = function(loginData){
    const loggedon = {
      "token": loginData.token,
    }
    const url = "http://localhost:3000/token/1";
    return this.http.put(url, loggedon)
    .toPromise().then(()=> {this.router.navigate(['dailybrew']);
    document.getElementById('id01').style.display='none';
  })
  }

  ngOnInit() {
  }

}
