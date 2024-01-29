import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      rola: ['', Validators.required]
    });
  }

  onSubmit() {
    const username = this.userForm?.get('username')?.value;
  const email = this.userForm?.get('email')?.value;
  const password = this.userForm?.get('password')?.value;
  const rola = this.userForm?.get('rola')?.value;

  if (username !== null && email !== null && password !== null && rola !== null) {
    const newUser: User = {
      id: 0, // Postavite odgovarajući ID, na primer, 0 za novi unos
      username: username,
      email: email,
      password: password,
      rola: rola
    };
    this.userService.create(newUser).subscribe((response) => {
      if (this.userForm) {
        this.userForm.reset();
      }
    });

      // Ovde pozovite servis za kreiranje novog mobilnog telefona
      // this.userService.create(newUser);

      // Resetujte formu nakon uspešnog kreiranja
      this.userForm.reset();
    }
  }
  povratak() {
    this.router.navigate(['/users']);
  }

}
