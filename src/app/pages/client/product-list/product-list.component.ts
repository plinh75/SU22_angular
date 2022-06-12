import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { ProductType } from 'src/app/types/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductType[]

  constructor(private productService: ProductService) { 
    this.products= []
  }

  ngOnInit(): void {
    this.onGetList()
  }

  onGetList(){
    this.productService.getProducts().subscribe((data) => {
      this.products = data
    })
  }

}
