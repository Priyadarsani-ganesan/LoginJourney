import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailpassComponent } from './emailpass/emailpass.component';
import { UserCredentialsComponent } from './user-credentials/user-credentials.component';
import { UserEmailComponent } from './user-email/user-email.component';
import { UserPasswordComponent } from './user-password/user-password.component';

const routes: Routes = [
  { path: '', component: EmailpassComponent },
  { path: 'password', component: UserPasswordComponent },
  { path: 'login', component: UserCredentialsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
