import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Observable, Subscribable, Subscriber } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;
  login: Login = new Login();
  logins: Observable<Login[]>;

  role: string;

  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    this.logins = this.authService.getLoginDet();
    this.loginForm = this.formBuilder.group({
      u_name: ['', Validators.compose([Validators.required])],
      pwd: ['', [Validators.required]]
    });

  }

  get formControls() {
    return this.loginForm.controls;
  }
  loginUser() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;

    if (this.loginForm.invalid) {
      this.toastr.error('Enter username and password');
      return;
    }
   /* console.log(this.login);
    this.authService.Login(this.login).subscribe(x => {
      console.log(x)
      x.forEach(element => {
        this.login.uid = element["uid"];
      
          
          this.router.navigateByUrl('/patadd');
          this.toastr.success('Login Successful');
        },
       );
      console.log(this.login.uid);
    });*/

  }
}