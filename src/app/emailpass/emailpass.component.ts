// import { stringify } from '@angular/compiler/src/util';s
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
  Config,
  NameCallback,
  FRUI,
  FRCallback
} from '@forgerock/javascript-sdk';
// import { FRStepHandlerBase } from '@forgerock/javascript-sdk-ui';
import { Step, StepOptions } from '@forgerock/javascript-sdk/lib/auth/interfaces';
import { config } from 'rxjs';

@Component({
  selector: 'app-emailpass',
  templateUrl: './emailpass.component.html',
  // providers: [FRStep],
  styleUrls: ['./emailpass.component.css']
})

export class EmailpassComponent {
  userName: string = '';
  password: string = '';
  step: Step = {};
  stepHandler = new FRStep(this.step);
  // nameCallBack:CallbackType = CallbackType.NameCallback

  ngOnInit(): void {

    Config.set({
      serverConfig: {
        baseUrl: 'https://dev-auth.theaa.local/auth',
        timeout: 90000,
      },
      realmPath: 'customers',
      tree: 'login'
    });

  }

  onSubmit(credentialForm: NgForm) {
    this.userName = credentialForm.value.email
    this.password = credentialForm.value.password

    // this.stepHandler?.callbacks.push({
    //   "input":[],
    //    "output":[],
    //   "type": CallbackType.NameCallback
    // })
    // this.step?.callbacks?.push({
    //   "payload": {
    //     "input":[],
    //     "output":[],
    //     "type": CallbackType.NameCallback
    //   }
    // })

    // console.log('Username & password is.. ' + this.userName + ' ' + this.password)
    // this.stepHandler.setCallbackValue(CallbackType.NameCallback, this.userName)
    // this.stepHandler.setCallbackValue(CallbackType.PasswordCallback, this.password)
    this.nextStep(this.stepHandler);

  }
  
  nextStep = async (step?: FRStep) => {

    step?.payload.callbacks?.push({
      "input":[],
       "output":[],
      "type": CallbackType.NameCallback
    })

    // const result = await FRAuth.next(step);
    const thisStep = await FRAuth.next(step);
    // console.log(step)
    
    // console.log(JSON.stringify(thisStep))
    // const frPayload = thisStep.payload;
    
    // working - code
    if (thisStep.payload.callbacks && thisStep.payload.callbacks[0].input) {
      thisStep.payload.callbacks[0].input[0].value = this.userName;
    }
    
    if (thisStep.payload.callbacks && thisStep.payload.callbacks[1].input) {
      thisStep.payload.callbacks[1].input[0].value = this.password;
    }
    // step && step['payload'] = thisStep.payload;
    // Object.assign(step && step['payload'], thisStep.payload)
    // console.log(step?.payload)
    const result = (await FRAuth.next(step));
    console.log(result.payload)
    // working-code end 

    // const frui = new FRUI();
    // const result = await frui.getSession(options);
    // thisStep.payload.callbacks.
    // const frNext = await FRAuth.next(undefined);
    // console.log(frNext)

    switch (result.type) {
      case StepType.LoginSuccess:
        console.log('Login success')
        // window.location.assign('https://www-dev.theaa.digital/auth/Account/SpInitiatedSso?idpEntityId=https%3A%2F%2Fdev-auth.theaa.local%2Fauth&binding=urn%3Aoasis%3Anames%3Atc%3ASAML%3A2.0%3Abindings%3AHTTP-POST&RelayState=https%3A%2F%2Fwww-dev.theaa.digital%2Fyour-account%2Fproducts');
        // const token = thisStep.getSessionToken();
        break;
      case StepType.LoginFailure:
        // const detail = output.getDetail();
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







