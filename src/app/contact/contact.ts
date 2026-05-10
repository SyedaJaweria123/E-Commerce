import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  name = '';
  email = '';
  phone = '';
  subject = '';
  message = '';
  errorMsg = '';
  successMsg = '';
  loading = false;

  onSubmit() {
    this.errorMsg = '';
    this.successMsg = '';

    if (!this.name.trim() || !this.email.trim() || !this.message.trim()) {
      this.errorMsg = 'Please fill all required fields!';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.errorMsg = 'Please enter a valid email address!';
      return;
    }

    this.loading = true;

    // Backend connect hone par: HTTP POST yahan hogi
    setTimeout(() => {
      this.successMsg = '✅ Message sent! We will reply within 24 hours.';
      this.name = '';
      this.email = '';
      this.phone = '';
      this.subject = '';
      this.message = '';
      this.loading = false;
    }, 800);
  }
}