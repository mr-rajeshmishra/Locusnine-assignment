import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from './../../common/user-service.service';
import { User } from '../../common/common.component';
import { CommonComponent } from '../../common/common.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Input() selectedUser: User;

  userRoles: any = [
    {
      RoleType: 1,
      Role: 'Admin'
    },
    {
      RoleType: 2,
      Role: 'Customer Executive'
    }
  ];

  userStatus: any = [
    {
      Status: 'Active'
    },
    {
      Status: 'Inactive'
    },
    {
      Status: 'Pending'
    }
  ];

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    if (this.selectedUser == null) {
      this.selectedUser = {
        Id: 0,
        Name: '',
        Email: '',
        MobileNumber: '',
        RoleType: 1,
        Status: 'Active'
      };
    }
  }

  saveUser(): void {
    if (this.selectedUser.Name !== '' && this.selectedUser.Email !== '' && CommonComponent.validateEmail(this.selectedUser.Email)) {
      this.userService.saveUser(this.selectedUser).subscribe(data => {
        if (data) {
          alert('User data saved.');
          $('#addUserModal').modal('hide');
        }
      }, error => {
        console.log(error);
      });
    } else {
      alert('Please enter valid data.');
    }
  }
}
