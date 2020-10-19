import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './authentication/auth.service';
import { ShareUserService } from './authentication/share-user.service';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title="front-end";
  constructor(){}

  public loginStatus:boolean=false;
  public user:User=null;

  ngOnInit()
  {
    AuthService.IsLoggedIn().subscribe(resp=>this.loginStatus=resp);

    ShareUserService.getUser().subscribe(resp=>this.user=resp);
  }

}  

