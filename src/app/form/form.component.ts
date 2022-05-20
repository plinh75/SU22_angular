import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputValues= {
    id:0,
    name: '',
    age: 0,
    email: ''
  };

  users = [
    {
      id:1,
      name: 'linhltpph',
      age:21,
      email: 'linhltpph@gmail.com'
    },
    {
      id:15,
      name: 'linhltpph2',
      age:22,
      email: 'linhltpph2@gmail.com',
    },
    {
      id:10,
      name: 'linhltpph5',
      age:22,
      email: 'linhltpph5@gmail.com'
    }
  ]

  onSubmit(userForm: NgForm) {
  //1. tìm id lớn nhất
    const userIds = this.users
    .map(user => user.id)
    .sort((a,b) => a-b)
    console.log(userIds);
    const newId = userIds[userIds.length - 1];
    
    //2. thêm vào mảng
    this.users.push({
      ...userForm.value, //lấy ra obj giá trị của form
      id: newId + 1
    })

    //3. cập nhật lại giá trị ban đầu
    userForm.resetForm({
      name: '',
      age:0,
      email: ''
  })
  }
}
