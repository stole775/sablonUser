import { Component } from '@angular/core';
import { User } from '../user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-detalji',
  templateUrl: './users-detalji.component.html',
  styleUrls: ['./users-detalji.component.css']
})
export class UsersDetaljiComponent {
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userservice: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.userservice.getOneByID(id).subscribe((data) => {
      this.user = data;
    });
  }

  povratak() {
    this.router.navigate(['/users']);
  }

}
