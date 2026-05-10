import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email      = '';
  password   = '';
  errorMsg   = '';
  successMsg = '';
  loading    = false;
  showPass   = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    public  modal: ModalService,
  ) {
    this.authService.initAdmin();
  }

  onLogin() {
    this.errorMsg   = '';
    this.successMsg = '';

    if (!this.email || !this.password) {
      this.errorMsg = 'Please fill all fields!';
      return;
    }

    this.loading = true;
    const result = this.authService.login(this.email, this.password);

    if (result.success) {
      this.successMsg = result.message;
      const user = this.authService.getCurrentUser();
      setTimeout(() => {
        this.modal.close();
        this.router.navigate([user?.role === 'admin' ? '/admin' : '/shop']);
      }, 500);
    } else {
      this.errorMsg = result.message;
      this.loading  = false;
    }
  }
}
