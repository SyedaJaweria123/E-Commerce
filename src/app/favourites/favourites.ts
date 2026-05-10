import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Servicefav } from '../servicefav/servicefav';
import { Servicecart } from '../servicecart/servicecart';
import { AuthService } from '../auth';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-favourites',
  standalone: false,
  templateUrl: './favourites.html',
  styleUrl: './favourites.css',
})
export class Favourites implements OnInit, OnDestroy {

  favProducts: any[]  = [];
  selectedProduct: any = null;
  currentUser: any     = null;

  // Login form fields (shown in right card when guest)
  loginEmail    = '';
  loginPassword = '';
  rememberMe    = false;
  showPass      = false;

  private userSub!: Subscription;

  constructor(
    public  fav:  Servicefav,
    private cart: Servicecart,
    private auth: AuthService,
    public  modal: ModalService,
  ) {}

  ngOnInit(): void {
    this.loadFavs();
    this.userSub = this.auth.currentUser$.subscribe(u => (this.currentUser = u));
  }

  ngOnDestroy(): void { this.userSub?.unsubscribe(); }

  loadFavs() { this.favProducts = this.fav.getFavs(); }

  removeFav(p: any) { this.fav.removeFav(p.name); this.loadFavs(); }

  clearAll() { this.favProducts.forEach(p => this.fav.removeFav(p.name)); this.loadFavs(); }

  addToCart(p: any) { this.cart.add(p); }

  openDetail(p: any)  { this.selectedProduct = p; }
  closeDetail()       { this.selectedProduct = null; }

  openLogin() { this.modal.openLogin(); }

  loginError = '';

  doLogin() {
    if (!this.loginEmail || !this.loginPassword) return;
    const result = this.auth.login(this.loginEmail, this.loginPassword);
    if (result.success) {
      this.loginEmail    = '';
      this.loginPassword = '';
      this.loginError    = '';
    } else {
      this.loginError = result.message;
    }
  }
}