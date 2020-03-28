import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users;
  searchText;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUsers()
      .subscribe(res => {
        this.users = res;
      })
  }

  search() {
    if (this.searchText != "")
      this.users = this.users.filter(res => {
        return res.name.toLowerCase().match(this.searchText.toLowerCase());
      })
    else {
      this.ngOnInit();
    }
  }

}


