import { Component } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  constructor(private loggingService: LoggingService) {}

  login(){
  this.loggingService.formatedMessageLog('Login');
  }


}
