import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
  // 'none' | 'login' | 'signup'
  activeModal = signal<'none' | 'login' | 'signup'>('none');

  openLogin()  { this.activeModal.set('login');  document.body.style.overflow = 'hidden'; }
  openSignup() { this.activeModal.set('signup'); document.body.style.overflow = 'hidden'; }
  close()      { this.activeModal.set('none');   document.body.style.overflow = ''; }
}
