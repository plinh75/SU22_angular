import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin-prd-form',
  templateUrl: './admin-prd-form.component.html',
  styleUrls: ['./admin-prd-form.component.css']
})
export class AdminPrdFormComponent implements OnInit {
  productForm: FormGroup
  productId :string

  constructor(
    private productService: ProductService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('',[ //FormControl(giá trị mặc định)
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(32),
      this.onValidateNameHasProduct
    ])
    })
    this.productId = ''
  }
  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.params['_id']
    if(this.productId){
      this.productService.getProduct(this.productId).subscribe(data => {
        //cập nhật data cho form 
        this.productForm.patchValue({
          name: data.name
        })
      })
    }
   }

  onValidateNameHasProduct (control: AbstractControl): ValidationErrors|null{
    const inputValue = control.value
    if(!inputValue.includes('product')){
      return {hasProductError: true}
    }
    return null
  }

  redirectToList(){
    this.router.navigateByUrl('/admin/products')
  }

  onSubmit() {
    //1. nhận dlieu từ form => this.productForm.value
    const data = this.productForm.value
    if(this.productId !== '' && this.productId !== undefined){
      this.productService.updateProduct(this.productId, data).subscribe(data => {
        this.redirectToList()
      })
    }

    //2. call api tạo mới
    this.productService.createProduct(data).subscribe(data => {
      //3. quay lại ds
      this.redirectToList()
      // 3.1: khi đã quay về list thì ngOnInit trong list sẽ lại đc chạy và call api
      // lấy ds mới

    })
  }

}
