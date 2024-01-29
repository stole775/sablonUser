import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetaljiComponent } from './users-detalji/users-detalji.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersEditComponent } from './users-edit/users-edit.component';

const routes: Routes = [
  { path: 'users', component: UsersListComponent }  ,
{ path: 'users/:id', component: UsersDetaljiComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'create', component:UsersCreateComponent },
  { path: 'edit/:id', component: UsersEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
