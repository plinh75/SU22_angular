import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeLogInRequest, TypeLogInResponse } from '../types/UserType';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  login(data: TypeLogInRequest) : Observable<TypeLogInResponse>{
    return this.http.post<TypeLogInResponse>(environment.signin, data)
  }
}
