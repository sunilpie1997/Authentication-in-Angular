import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let isValid:boolean=AuthService.hasValidToken();

    if(isValid)
    {
      let token=localStorage.getItem('token');
      request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }


}
