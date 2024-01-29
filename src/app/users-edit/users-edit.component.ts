import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';
@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  userForm: FormGroup;
  userID!: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      rola: ['', Validators.required]
    });
  }
   idParamP: number | null = null;  

  ngOnInit() {
  
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.idParamP = +idParam;  
      this.userID = +idParam;

       
      this.userService.getOneByID(this.userID).subscribe(user => {
        this.userForm.patchValue({
          username: user.username,
          email: user.email,
          password: user.password,
          rola: user.rola
        });
      });
    } else {
    
    }
  }

  onSubmit() {
    const username = this.userForm?.get('username')?.value;
    const email = this.userForm?.get('email')?.value;
    const password = this.userForm?.get('password')?.value;
    const rola = this.userForm?.get('rola')?.value;
  
    if (username !== null && email !== null && password !== null && rola !== null) {
       
      if (typeof this.idParamP === 'number') {
        const newUser: User = {
          id: this.idParamP,
          username: username,
          email: email,
          password: password,
          rola: rola
        };
        this.userService.updateUser(newUser).subscribe((response) => {
          if (this.userForm) {
            this.userForm.reset();
          }
        });
      } else {
         
        console.error('idParamP nije broj.');
      }
    }
  }
  povratak() {
    this.router.navigate(['/users']);
  }
}
