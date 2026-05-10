import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
})
export class Footer {

  email      = '';
  successMsg = '';
  errorMsg   = '';

  // Accordion — konsa section khula hai (null = sab band)
  openSection: string | null = null;

  toggle(section: string) {
    // Sirf mobile par accordion kaam kare
    if (window.innerWidth <= 768) {
      this.openSection = this.openSection === section ? null : section;
    }
  }

  subscribe() {
    this.successMsg = '';
    this.errorMsg   = '';

    if (!this.email) {
      this.errorMsg = 'Please enter email!';
      return;
    }

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(this.email)) {
      this.errorMsg = 'Invalid email!';
      return;
    }

    this.successMsg = '🎉 Subscribed successfully!';
    this.email = '';
  }
}
