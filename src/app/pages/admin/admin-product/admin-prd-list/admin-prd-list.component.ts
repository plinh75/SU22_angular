import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { ProductType } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-prd-list',
  templateUrl: './admin-prd-list.component.html',
  styleUrls: ['./admin-prd-list.component.css']
})
export class AdminPrdListComponent implements OnInit {
  products: ProductType[]

  constructor(private productService: ProductService) {
    this.products = []
  }

  ngOnInit(): void {
    this.onGetList()
  }

  onGetList(){
    this.productService.getProducts().subscribe((data) => {
      this.products = data
    })
  }

  onUpdateStatus(productId: string, newStatus: number){
    this.productService.updateProduct(productId, {
      status: newStatus
    }).subscribe(data => {
      this.onGetList()
    })
  }

  onDelete(_id: string | number) {
    //confirm
    const confirmDel = confirm('bạn có muốn xóa không?')
    //ktra dlieu => xóa
    if (confirmDel && _id) {
      this.productService.deleteProduct(_id).subscribe((data) => {
        //trả về ds
        this.onGetList()
      })
    }
  }

}
