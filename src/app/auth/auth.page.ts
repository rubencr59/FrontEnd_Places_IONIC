import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage implements OnInit {

  loginForm: FormGroup;


  constructor(private authService: AuthService, private userService:UserService, private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}


  onRegister() {

    let newUser = this.userService.getUserByNameAndPassword(this.loginForm.value.username, this.loginForm.value.password);

    if(newUser == null){
      this.authService.login();
      newUser = new User(this.loginForm.value.username, this.loginForm.value.password);
      this.userService.setActualUser(newUser);
      this.router.navigateByUrl('/places/tabs/discover');
    }
  }

  onLogin() {

   let newUser = this.userService.getUserByNameAndPassword(this.loginForm.value.username, this.loginForm.value.password);

    if(newUser != null){
      this.authService.login();
      this.userService.setActualUser(newUser);
      this.router.navigateByUrl('/places/tabs/discover');
    }
  }
}
