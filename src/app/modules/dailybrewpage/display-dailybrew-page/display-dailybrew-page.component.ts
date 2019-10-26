import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../../shared/services/token.service';

@Component({
  selector: 'app-display-dailybrew-page',
  templateUrl: './display-dailybrew-page.component.html',
  styleUrls: ['./display-dailybrew-page.component.css']
})
export class DisplayDailybrewPageComponent implements OnInit {
    // pulls in userId from login token
  // @Input() userId: number;
  public token
  
  constructor( tokenService: TokenService) { 
    this.token = tokenService.token;
  }
 

  ngOnInit() {
  }

}
