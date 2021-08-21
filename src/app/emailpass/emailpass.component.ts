import { Component, Injector, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  CallbackType,
  Dispatcher,
  ErrorCode,
  FRAuth,
  FRLoginFailure,
  FRStep,
  StepType,
  Config
} from '@forgerock/javascript-sdk';
// import { FRStepHandlerBase } from '@forgerock/javascript-sdk-ui';
import { Step, StepOptions } from '@forgerock/javascript-sdk/lib/auth/interfaces';

@Component({
  selector: 'app-emailpass',
  templateUrl: './emailpass.component.html',
  // providers: [FRStep],
  styleUrls: ['./emailpass.component.css']
})

export class EmailpassComponent extends FRStep {
  constructor(payload: Step) {
    super(payload);
  }
  userName: string = '';
  password: string = '';

  ngOnInit(): void {

    Config.set({
      serverConfig: {
        baseUrl: 'https://dev-auth.theaa.local/auth',
        timeout: 90000,
      },
      realmPath: 'customers',
      tree: 'login'
    });

    this.nextStep(this);
  }

  onSubmit(emailForm: NgForm) {
    this.userName = emailForm.value.email
    this.password = emailForm.value.password
    this.setCallbackValue(CallbackType.NameCallback, this.userName)
    this.setCallbackValue(CallbackType.PasswordCallback, this.password)
    this.nextStep(this);
  }

  nextStep = async function (step :FRStep) {

    const thisStep = await FRAuth.next(step);

    switch (thisStep.type) {
      case StepType.LoginSuccess:
        console.log('Login success')
        // const token = thisStep.getSessionToken();
        break;
      case StepType.LoginFailure:
        const detail = thisStep.getDetail();
        console.log('Login failure')
        break;
      case StepType.Step:
        console.log('Third case..')
        // Populate `thisStep` callbacks here, and then continue
        // thisStep.setInputValue('foo');
        // nextStep(thisStep);
        break;
    }
  }
}



