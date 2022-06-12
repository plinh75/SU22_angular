import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { ProductCart, ProductType } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-prd-detail',
  templateUrl: './admin-prd-detail.component.html',
  styleUrls: ['./admin-prd-detail.component.css']
})
export class AdminPrdDetailComponent implements OnInit {
  product: ProductType
  cartItemValue: number = 1

  constructor(
    private productService: ProductService,
    private activateRoute: ActivatedRoute
  ) {
    this.product = {
      _id: '',
      name: '',
      status: 0,
      sale_price: 0,
      img: ''
    }
  }

  ngOnInit(): void {
    const idFormUrl = this.activateRoute.snapshot.params['_id']

    this.productService.getProduct(idFormUrl).subscribe(data => {
      this.product = data
    })
  }

  onInputValueChange(event:any){
    this.cartItemValue= event.target.value
  }

  onAddToCart(){
    //1. định nghĩa cấu trúc dữ liệu
    const addItem = {
      _id: this.product._id,
      name: this.product.name,
      value: +this.cartItemValue
    }
    //2. kiểm tra xem đã có sp trong giỏ hàng chưa
    //2.1: lấy ra toàn bộ sp trong giỏ
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]')
    console.log(addItem, cartItems);
    //2.2: tìm phần tử trong giỏ có id === getItem
    const existItem = cartItems.find((item: ProductCart) => item._id === addItem._id)
    //3. nếu không có thì push luôn vào phần tử đầu tiên
    if(!existItem){
      cartItems.push(addItem)
    } else{
      //3.1: nếu đã có thì cập nhật số lượng mới = số lượng cũ
      existItem.value += addItem.value
    }
    //4. cập nhật dlieu giỏ hàng
    localStorage.setItem('cart', JSON.stringify(cartItems))
    //5. cập nhật lại giá trị cho ô input
    this.cartItemValue = 1
  }
}
