import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {

  firstName       = '';
  lastName        = '';
  email           = '';
  confirmEmail    = '';
  password        = '';
  confirmPassword = '';
  newsletter      = false;
  errorMsg        = '';
  successMsg      = '';
  loading         = false;
  showPass        = false;
  showConfirm     = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    public  modal: ModalService,
  ) {}

  get strengthWidth(): string {
    const l = this.password.length;
    if (!l) return '0%';
    if (l < 6) return '33%';
    if (l < 10) return '66%';
    return '100%';
  }
  get strengthColor(): string {
    const l = this.password.length;
    if (l < 6)  return '#e53935';
    if (l < 10) return '#fb8c00';
    return '#43a047';
  }
  get strengthLabel(): string {
    const l = this.password.length;
    if (l < 6)  return 'Weak';
    if (l < 10) return 'Medium';
    return 'Strong';
  }
  get name(): string { return (this.firstName + ' ' + this.lastName).trim(); }

  onSignup() {
    this.errorMsg   = '';
    this.successMsg = '';

    if (!this.firstName || !this.lastName || !this.email || !this.confirmEmail || !this.password || !this.confirmPassword) {
      this.errorMsg = 'Please fill all fields!'; return;
    }
    if (this.email !== this.confirmEmail) {
      this.errorMsg = 'Emails do not match!'; return;
    }
    if (this.password !== this.confirmPassword) {
      this.errorMsg = 'Passwords do not match!'; return;
    }
    if (this.password.length < 6) {
      this.errorMsg = 'Password must be at least 6 characters!'; return;
    }

    this.loading = true;
    setTimeout(() => {
      const result = this.authService.signup(this.name, this.email, this.password);
      if (result.success) {
        this.successMsg = 'Account created! Please sign in.';
        setTimeout(() => this.modal.openLogin(), 1200);  // ✅ switch to login modal
      } else {
        this.errorMsg = result.message;
      }
      this.loading = false;
    }, 600);
  }
}
