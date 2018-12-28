import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../services/authentication.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

constructor(private auth: AuthenticationService) {
// this.auth.visible=false;
 }

  ngOnInit() { }

  logout() {
    this.auth.logout();    
  }

}
