import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {InteractionService} from '../interaction.service';

@Component({
  selector: 'app-user-password',
  templateUrl: './user-password.component.html',
  styleUrls: ['./user-password.component.css']
})
export class UserPasswordComponent implements OnInit {

  password : string = '';
  constructor(private interactionService : InteractionService) { }

  ngOnInit(): void {
  }

  onSubmit(passwordForm : NgForm) {
    this.password = passwordForm.value.password
    this.interactionService.passwordSent(this.password);
  
  }
}
