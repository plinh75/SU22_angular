import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  name = 'linhltpph'

  //dữ liệu mảng
  teachers = [
    {
      id: 1,
      name: 'gv1',
      age: 32,
      gender: 1,
      avatar: 'https://haycafe.vn/wp-content/uploads/2021/12/hinh-anh-anime-nam-1.jpg',
      status: 0
    },
    {
      id: 2,
      name: 'gv2',
      age: 32,
      gender: 0,
      avatar: 'https://tophinhanh.com/wp-content/uploads/2021/12/anh-anime-nu-xinh-nhu-thien-than-full-hd-1-564x375.jpg',
      status: 0
    },
    {
      id: 3,
      age: 25,
      gender: 0,
      avatar: 'https://tophinhanh.com/wp-content/uploads/2021/12/hinh-anime-nu-sieu-de-thuong.jpg',
      name: 'gv3',
      status: 1
    },
  ]
  studentName = 'không bít'
  studentId = 22
  schoolName = ''
  clickh1() {
    console.log('đã click');
    this.schoolName = 'poly'
  }
  showStatus = true
  changeTableStatus() {
    this.showStatus = !this.showStatus
  }

  inputValue = ''
  changeInput(event: any) {
    this.inputValue = event.target.value;
  }

  //form đki
  inputForm = {
    name: '',
    age: '',
    gender: '0',
    avatar: '',
    status: '0'
  }
  // onInputName(event:any, info:string){
  //   // console.log(event.target.value, info);
  //   this.inputForm.name = event.target.value

  // }
  // onInputAge(event: any, info:string){
  //   // console.log(event.target.value, info);
  //   this.inputForm.age = event.target.value
  // }

  onInput(event: any, key: 'name' | 'age' | 'avatar' | 'gender' | 'status') { //key chỉ đc là giá trị đã đc định nghĩa
    this.inputForm[key] = event.target.value
  }
  //click submit
  onSubmit() {
    console.log(this.inputForm);
    //thêm dl vào mảng teachers
    this.teachers.push({
      ...this.inputForm,
      age: +this.inputForm.age,
      gender: +this.inputForm.gender,
      status: +this.inputForm.status,
      id: this.teachers.length+1
    })
    //cập nhật lại giá trị form
    this.inputForm = {
      name: '',
      age: '',
      gender: '0',
      avatar: '',
      status: '0'
    }
  }
}
