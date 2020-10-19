import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginUser } from 'src/app/classes/login-user';
import { AuthService } from 'src/app/authentication/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit{

   
  loginForm:FormGroup=null;
  public loginStatus:boolean=false;
  constructor(private authService:AuthService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    
    AuthService.IsLoggedIn().subscribe(resp=>this.loginStatus=resp);

      this.loginForm=new FormGroup({

        userName:new FormControl('',[Validators.required,Validators.minLength(3)]),
        password:new FormControl('',[Validators.required,Validators.minLength(8)])
      });
    

  }



  async onSubmit()
  {
    /* remove this... */
    alert(JSON.stringify(this.loginForm.value));

    let loginUser:LoginUser=new LoginUser();
    loginUser.setUserName(this.loginForm.get('userName').value);
    loginUser.setPassword(this.loginForm.get('password').value);

    await this.authService.login(loginUser);

    /* reset form */
    this.loginForm.reset();
    
  }

  logout()
  {
    this.authService.logout();
  }


}
