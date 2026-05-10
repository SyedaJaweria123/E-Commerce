import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: false,
  templateUrl: './service.html',
  styleUrl: './service.css',
})

@Injectable({
  providedIn: 'root'
})
export class Service {
   private items: any[] = [];

  // ➕ ADD TO CART
  addToCart(product: any) {
    this.items.push(product);
  }

  // 📦 GET CART
  getCartItems() {
    return this.items;
  }

  // ❌ CLEAR CART
  clearCart() {
    this.items = [];
  }
}
