import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.scss']
})
export class AboutUserComponent implements OnInit {
  user: User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    const username = this.route.snapshot.params['username'];
    this.userService
      .getUser(username)
      .then(user => {
        if (!user) {
          this.router.navigate(['about/404']);
        }
        this.user = user;
      });
  }

  goBack = () => {
    this.router.navigate(['/about']);
  }
}
