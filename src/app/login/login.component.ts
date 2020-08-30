import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: string = null;
  username: string = null;
  password: string = null;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.loginUser(this.username, this.password).subscribe(
      isLoggedIn => {
        if (isLoggedIn) {
          if (this.authService.redirectUrl) {
            this.router.navigate([this.authService.redirectUrl]);
          } else {
            this.router.navigate(['/angular/home']);
          }
        }
      },
      (errorObj) => { this.error = errorObj.error.error; }
    )
  }


}
