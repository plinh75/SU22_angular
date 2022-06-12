import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { CateType } from 'src/app/types/Category';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  users: CateType[]

  constructor(private userService: UserService) { 
    this.users = []
  }

  ngOnInit(): void {
    this.onGetList()
  }
  onGetList(){
    this.userService.getUsers().subscribe((data) => {
      this.users = data
    })
  }

  onDelete(_id:string | number){
    const confirmDel = confirm('xóa người dùng này?')
    if(confirmDel && _id){
      this.userService.deleteUser(_id).subscribe((data) => {
        this.onGetList()
      })
    }
  }

}
