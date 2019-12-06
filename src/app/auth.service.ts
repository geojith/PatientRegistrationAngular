import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseUrl= 'http://localhost:49843/api';
  formData: Login;

  constructor(private http: HttpClient) { }

  public Login(userInfo:Login): Observable<any>{
    return this.http.get(this.baseUrl+'/Logins?u_name='+userInfo.u_name+'&pwd='+userInfo.pwd);
  }
  
  public isLoggedIn()
  {
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }

  public logout()
  {
    localStorage.removeItem('ACCESS_TOKEN');
  }

  public getLoginDet(): Observable<any>{
    return this.http.get(this.baseUrl+'/Login');
  }

}
