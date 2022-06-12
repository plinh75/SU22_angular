import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CateType } from '../types/Category';
import { TypeLogInRequest } from '../types/UserType';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<CateType[]>{
    return this.http.get<CateType[]>(environment.users)
  }

  deleteUser (_id:string|number): Observable<any>{
    return this.http.delete(`${environment.users}/${_id}`)
  }

  updateUser (_id: string, data: TypeLogInRequest): Observable<TypeLogInRequest>{
    return this.http.patch<TypeLogInRequest>(`${environment.users}/${_id}`, data)
  }
}
