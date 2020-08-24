import { Component, OnInit } from '@angular/core';
import { QueryList, ViewChildren } from '@angular/core';
import { UserServiceService } from './../common/user-service.service';
import { User } from '../common/common.component';
import { SortableHeaderDirective, SortEvent } from '../common/sort-helper-directive.component';

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any;
  userList: User[];
  showAddUserData = false;
  selectedUser: any;

  @ViewChildren(SortableHeaderDirective) headers: QueryList<SortableHeaderDirective>;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    $('#addUserModal').on('hidden.bs.modal', () => {
      this.showAddUserData = false;
      this.selectedUser = null;
      this.getUsers();
    });
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsersList().subscribe(data => {
      this.userList = this.users = data;
    }, error => {
      console.log(error);
    });
  }

  editUser(user): void {
    this.selectedUser = user;
    this.showAddUserData = true;
    setTimeout(() => {
      $('#addUserModal').modal('show');
    });
  }

  deleteUser(userId): void {
    this.userService.deleteUser(userId).subscribe(data => {
      if (data) {
        this.getUsers();
        alert('User Deleted.');
      }
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line: typedef
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
      this.users = this.userList;
    } else {
      this.users = [...this.userList].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  addUser(): void {
    this.showAddUserData = true;
    setTimeout(() => {
      $('#addUserModal').modal('show');
    });
  }

}

