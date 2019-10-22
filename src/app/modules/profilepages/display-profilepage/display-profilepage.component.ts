import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-profilepage',
  templateUrl: './display-profilepage.component.html',
  styleUrls: ['./display-profilepage.component.css']
})
export class DisplayProfilepageComponent implements OnInit {
  token=1
  public param;
  public account: Account;
  private accountRoute = 'http://localhost:3000/accounts';

  constructor( private route: ActivatedRoute, private http: HttpClient) { }
  getAccount(username){
    this.http.get<Account>(this.accountRoute + "?deleted=false&username=" + username).subscribe(account => {
      this.account = account;
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
    this.getAccount(param);
  }

}
