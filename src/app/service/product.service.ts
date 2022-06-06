import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductCreate, ProductType } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //khai báo http để có đối tượng HttpCLient tương tác với các phương thức của api
  constructor(private http: HttpClient) { }

  //kiểu dlieu Observable giúp lắng nghe api trả về kqua
  getProducts() : Observable<ProductType[]>{
    return this.http.get<ProductType[]>(environment.products)
  }

  getProduct(_id: string): Observable<ProductType>{
    return this.http.get<ProductType>(`${environment.products}/${_id}`)
  }

  deleteProduct (_id: string|number): Observable<any>{
    return this.http.delete(`${environment.products}/${_id}`)
  }
  
  //dlieu gửi đi {name:string}, nhận về {name:string, id: string}
  createProduct(data: ProductCreate): Observable<ProductType>{
    return this.http.post<ProductType>(`${environment.products}`, data)
  }

  updateProduct(_id:string, data: ProductCreate): Observable<ProductType>{
    return this.http.patch<ProductType>(`${environment.products}/${_id}`, data)
  }
}
