import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class ShareUserService {

  private static share_user=new BehaviorSubject<User>(ShareUserService.getUserFromLS());

  constructor() { }

  /* get user from local storage */
  static getUserFromLS():User
  {
    let old_user:User=JSON.parse(localStorage.getItem('user'));
    
    if(old_user)
    {
      return old_user;
    }
    
    return null;  
  }

  /* returns current logged in user to other components */
  static getUser():Observable<User>
  {
    return this.share_user.asObservable();
  }

  /* set current logged in user :'by authService' only */
  static setUser(user:User)
  {
      this.share_user.next(user);
    
  }

}
