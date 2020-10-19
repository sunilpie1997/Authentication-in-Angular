import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor() { }

  private static path="http://localhost:3000/";
  
  public static getPath():String
  {
    return RestApiService.path;
  }
}
