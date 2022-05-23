import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  //nơi qli dlieu và logic của user
  formValues = {
    id: 0,
    name: '',
    age: 0,
    email: ''
  }

  users = [
    {
      id: 1,
      name: 'linhltpph',
      age: 21,
      email: 'linhltpph@gmail.com'
    },
    {
      id: 15,
      name: 'linhltpph2',
      age: 22,
      email: 'linhltpph2@gmail.com',
    },
    {
      id: 10,
      name: 'linhltpph5',
      age: 22,
      email: 'linhltpph5@gmail.com'
    }
  ]

  onParentSubmit(formData: any) {
    //1. tìm id lớn nhất
    const userIds = this.users
      .map(user => user.id)
      .sort((a, b) => a - b)
    console.log(userIds);
    const newId = userIds[userIds.length - 1];
    // nếu formValues có id = 0 thì thêm mới -> 2
    // nếu formValues có id != 0 thì chỉnh sửa -> 2.1 
    if (this.formValues.id == 0) {
      //2. thêm vào mảng
      this.users.push({
        ...formData, //giá trị con truyền sang
        id: newId + 1
      })
    } else {
      // 2.1: chỉnh sửa
      const idx = this.users.findIndex((user) => user.id == this.formValues.id)
      if (idx > -1) {
        this.users[idx] = { ...formData, id: this.formValues.id }
      }
    }
    console.log('parent form data', formData);

  }

  onParentDelete(userId: number) {
    this.users = this.users.filter(user => user.id !== userId)
  }

  onParentEdit(userId: number) {
    //1. tìm ra user có id là id truyền vào
    const editUser = this.users.find((user) => user.id === userId)
    //2. nếu tồn tại edit User thì sẽ cho hiện dlieu ở form
    if (editUser) {
      return this.formValues = { ...editUser }
    }  
      return alert('không tìm thấy user')
  }
}

