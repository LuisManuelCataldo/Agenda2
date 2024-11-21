import { Component, OnInit } from '@angular/core';
import { iAuthRequest } from 'src/app/core/interfaces/auth';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public dataAuthService: AuthService) {}

  ngOnInit(): void {}

  authRequest: iAuthRequest = {
    userName: 'asd',
    password: 'asd',
  };

  iniciarSesion() {
    this.dataAuthService.login(this.authRequest);
  }
}
