import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  //dlieu nhận từ cha chứ k qli nữa
  @Input()users: any

  @Output() handleDelete: EventEmitter<number>
  @Output() handleEdit: EventEmitter<number>
  constructor() { 
    this.handleDelete = new EventEmitter()
    this.handleEdit = new EventEmitter()
  }

  ngOnInit(): void {
  }

  onDelete(userId:number){
    this.handleDelete.emit(userId)
  }

  onEdit(userId:number){
    this.handleEdit.emit(userId)
  }

}
