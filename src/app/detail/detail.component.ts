import { Component } from '@angular/core';
import {AuthService} from '../pubilc/guards/AuthService';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent {
  message: string;

  constructor(private authService: AuthService) {
    this.message = '';
  }

  test2(username, password):void{
    console.log(username.value,password.value)
  }

  login(username: string, password: string): boolean {
    this.authService.test()
    this.message = '';
    if (!this.authService.login(username, password)) {
      this.message = 'Incorrect credentials.';
      setTimeout(function() {
        this.message = '';
      }.bind(this), 2500);
    }
    return false;
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }
}
