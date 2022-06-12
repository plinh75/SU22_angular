import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { CateType } from 'src/app/types/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  cates: CateType[]

  constructor(
    private categoryService: CategoryService
  ) {
    this.cates = []
   }

  ngOnInit(): void {
    this.onGetList()
  }

  onGetList(){
    this.categoryService.getCates().subscribe((data) => {
      this.cates = data
    })
  }

}
