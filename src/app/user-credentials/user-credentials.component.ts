import { Component, OnInit } from '@angular/core';
import { InteractionService} from '../interaction.service';

@Component({
  selector: 'app-user-credentials',
  templateUrl: './user-credentials.component.html',
  styleUrls: ['./user-credentials.component.css']
})
export class UserCredentialsComponent implements OnInit {

  userEmail : string = '';
  userPassword : string = '';

  constructor(private interactionService : InteractionService) { }

  ngOnInit(): void {
    this.interactionService.email.subscribe(data => {
      this.userEmail = data;
    })

    this.interactionService.pass.subscribe(data => {
      this.userPassword = data;
    })

  }


}
