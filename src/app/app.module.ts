import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserEmailComponent } from './user-email/user-email.component';
import { UserPasswordComponent } from './user-password/user-password.component';
import { UserCredentialsComponent } from './user-credentials/user-credentials.component';
import { FormsModule } from  '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailpassComponent } from './emailpass/emailpass.component';


@NgModule({
  declarations: [
    AppComponent,
    UserEmailComponent,
    UserPasswordComponent,
    UserCredentialsComponent,
    EmailpassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
