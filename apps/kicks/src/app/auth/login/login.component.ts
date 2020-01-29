import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '@mdv3/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'mdv3-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private service: AuthService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      name: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit() {
    this.service.authenticate(this.loginForm.value);
    this.router.navigateByUrl('/')
  }
}
