import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  useri: User[] = [];
   
  filteredUsers: User[] = [];

  constructor(private userservice: UserService, private router: Router) {}
  ngOnInit(): void {
    this.userservice.getAll().subscribe((data) => {
      this.useri = data;
      this.filteredUsers = data;
    });
  }
  viewDetails(id: number) {
    this.router.navigate(['/users', id]);
  }
  dodaj() {
    this.router.navigate(['/create']);
  }
  deleteUser(id: number) {
    
    this.userservice.delete(id).subscribe(() => {
     
      this.useri = this.useri.filter(user => user.id !== id);
    });
  }
  editUser(id: number) {
 
    this.router.navigate(['/edit', id]);
  }
}
