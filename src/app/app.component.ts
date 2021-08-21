import { LocalizedString, unescapeIdentifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
// import { FRAuth, Config, CallbackType } from '@forgerock/javascript-sdk-ui';
import { InteractionService } from './interaction.service';
import {UserCredentialsComponent} from './user-credentials/user-credentials.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  // state: { error: undefined; ssoToken: undefined; step: undefined; };

  username : string = '';
  password : string = '';
  setState: any;

  constructor( 
    private interactionService : InteractionService) {

    // this.state = {
    //   error: undefined,
    //   ssoToken: undefined,
    //   step : undefined,
    // };
  }

  ngOnInit() {

    // Config.set({
    //   serverConfig: {
    //     baseUrl: 'https://dev-auth.theaa.local/auth',
    //     timeout: 90000,
    //   },
    //   realmPath: 'customers',
    //   tree: 'login'
    // });

  //   function login(props) {
  //     props.step.setCallbackValue(CallbackType.NameCallback, "priya1986@gmail.com" );
  //     props.step.setCallbackValue(CallbackType.PasswordCallback, "Password123" );
  //    const onSubmit = (props) => {
  //      onSubmit(props.step);
  //    }
  //  }
   
    // this.nextStep();
  }

  // nextStep = async (step) => {
  //   step = await FRAuth.next(step);

  //   let ssoToken, error;
  //   if (step.type === 'LoginSuccess') {
  //     ssoToken = step.getSessionToken();
  //   } else if (step.type === 'LoginFailure') {
  //     error = step.getCode();
  //   }
  //   this.setState({ step, ssoToken, error })
  // };
    
  // onError = (error) => {
  //   this.setState({error});
  // };

}

//Custom UI for rendering usernamepasssword step
