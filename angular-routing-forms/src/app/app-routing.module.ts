import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { UserEditorComponent } from './page/user-editor/user-editor.component';
import { UsersComponent } from './page/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users', // http://localhost:4200/users
    component: UsersComponent,
  },
  {
    path: 'user-editor/:id',
    component: UserEditorComponent,
  },
  {
    path: '**', // it must be the last
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
