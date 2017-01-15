import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-about-list',
  templateUrl: './about-list.component.html',
  styleUrls: ['./about-list.component.scss']
})

export class AboutListComponent implements OnInit {
  users: User[];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService
      .getUsers()
      .then(users => this.users = users);
  }
}
