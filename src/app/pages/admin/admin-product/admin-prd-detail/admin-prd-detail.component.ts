import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { ProductType } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-prd-detail',
  templateUrl: './admin-prd-detail.component.html',
  styleUrls: ['./admin-prd-detail.component.css']
})
export class AdminPrdDetailComponent implements OnInit {
  product: ProductType

  constructor(
    private productService: ProductService,
    private activateRoute: ActivatedRoute
  ) {
    this.product = {
      _id: '',
      name: '',
      status: 0
    }
  }

  ngOnInit(): void {
    const idFormUrl = this.activateRoute.snapshot.params['_id']

    this.productService.getProduct(idFormUrl).subscribe(data => {
      this.product = data
    })
  }
}
