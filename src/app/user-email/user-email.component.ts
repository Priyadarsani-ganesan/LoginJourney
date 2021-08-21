import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import {TealiumUtagService} from '../tealium/utag.service';
import {InteractionService} from '../interaction.service'

@Component({
  selector: 'app-user-email',
  // providers: [TealiumUtagService],
  templateUrl: './user-email.component.html',
  styleUrls: ['./user-email.component.css']
})
export class UserEmailComponent implements OnInit {

  emailAddress : string = '';
  constructor(private interactionService: InteractionService) {}
  //  {
  //   this.tealium.setConfig({
  //     "account" : "theaa",
  //     "profile" : "login",
  //     "environment" : "env"
  //   });
  //  }

  ngOnInit(): void {
    // this.tealium.view({event_name: 'init'});
  }

  onNext(emailForm : NgForm) {
    console.log('form submitted ' + emailForm)
    this.emailAddress = emailForm.value.email;
    this.interactionService.emailSent(this.emailAddress);
    console.log('Email entered by user is..' + this.emailAddress)
  
  }
}
