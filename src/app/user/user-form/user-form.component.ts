import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() inputValues: {
    id: number,
    name: string,
    age: number,
    email: string
  }
  //1. định nghĩa sự kiện để bắn dlieu ngược lại 
  @Output() handleSubmit: EventEmitter<any>

  constructor() {
    //2. khai báo giá trị default
    this.handleSubmit = new EventEmitter()
    this.inputValues = {
      id: 0,
      name: '',
      age: 0,
      email: ''
    }
  }

  ngOnInit(): void {
  }

  onSubmit(userForm: NgForm) {
    //3. gửi dlieu đi
    this.handleSubmit.emit(userForm.value)
    userForm.resetForm({
      name: '',
      age: 0,
      email: ''
    })
  }
}
