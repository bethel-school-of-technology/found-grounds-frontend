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
    this.loggedon = {
      "username": loginData.username,
      "password": loginData.password
    }
    console.log(this.loggedon)
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
    
  }

  ngOnInit() {
  }

}
