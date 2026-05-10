import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Servicecart } from '../servicecart/servicecart';

@Component({
  selector: 'app-addtocart',
  standalone: false,
  templateUrl: './addtocart.html',
  styleUrl: './addtocart.css',
})
export class Addtocart implements OnInit {

  freeShippingThreshold = 8000;
  orderNote = '';
  isViewBagPage = false;

  constructor(public cart: Servicecart, private router: Router) {}

  ngOnInit() {
    this.checkRoute(this.router.url);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkRoute(event.urlAfterRedirects);
      }
    });
  }

  checkRoute(url: string) {
    this.isViewBagPage = url.includes('addtocard');

    // View bag page par drawer close karo
    if (this.isViewBagPage) {
      this.cart.isCartOpen = false;
      document.body.style.overflow = '';
    }
  }

  get shippingProgress(): number {
    return Math.min((this.cart.getTotal() / this.freeShippingThreshold) * 100, 100);
  }

  get freeShippingLeft(): number {
    return Math.max(this.freeShippingThreshold - this.cart.getTotal(), 0);
  }
}