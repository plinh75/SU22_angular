import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CateType } from '../types/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  //khai báo http để có đối tượng HttpCLient tương tác với các phương thức của api
  constructor(private http: HttpClient) { }

  //kiểu dlieu Observable giúp lắng nghe api trả về kqua
  getCates(): Observable<CateType[]>{
    return this.http.get<CateType[]>(environment.cates)
  }

  getCate(_id:string): Observable<CateType>{
    return this.http.get<CateType>(environment.cates)
  }
}
