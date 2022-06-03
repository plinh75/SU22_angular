import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin-prd-form',
  templateUrl: './admin-prd-form.component.html',
  styleUrls: ['./admin-prd-form.component.css']
})
export class AdminPrdFormComponent implements OnInit {
  productForm: FormGroup

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('',[ //FormControl(giá trị mặc định)
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(32)
    ])
    })
  }
  ngOnInit(): void { }

  onSubmit() {
    //1. nhận dlieu từ form => this.productForm.value
    const data = this.productForm.value
    //2. call api tạo mới
    this.productService.createProduct(data).subscribe(data => {
      //3. quay lại ds
      this.router.navigate(['/admin','products'])
      // 3.1: khi đã quay về list thì ngOnInit trong list sẽ lại đc chạy và call api
      // lấy ds mới

    })


  }

}
