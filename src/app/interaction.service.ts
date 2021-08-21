import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private username = new BehaviorSubject<string>('');
  private password = new BehaviorSubject<string>('');
  email = this.username.asObservable();
  pass = this.password.asObservable();

  constructor() { }

  emailSent(email : string) {
    console.log('Email received in interaction service.. ' + email);
    this.username.next(email);
  }

  passwordSent(password : string) {
    console.log('Password received in interaction service.. ' + password);
    this.password.next(password);
  }
}
