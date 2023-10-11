import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RouteApp';
  constructor(private router: Router, private loginService: LoginService) {}
  isAuthenticated(): boolean {
    return this.loginService.isAuthenticated();
  }
}