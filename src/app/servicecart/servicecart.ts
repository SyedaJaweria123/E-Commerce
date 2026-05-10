import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Servicecart {

  items: any[] = [];

  isCartOpen = false;

  // OPEN CART
  openCart() {
    this.isCartOpen = true;
    document.body.style.overflow = 'hidden';
  }

  // CLOSE CART
  closeCart() {
    this.isCartOpen = false;
    document.body.style.overflow = '';
  }

  // TOGGLE CART
  toggleCart() {
    this.isCartOpen ? this.closeCart() : this.openCart();
  }

  // ADD PRODUCT
  add(product: any) {
    let existing = this.items.find(i => i.name === product.name);

    if (existing) {
      existing.qty++;
    } else {
      this.items.push({ ...product, qty: 1 });
    }

    this.openCart();
  }

  // REMOVE
  remove(index: number) {
    this.items.splice(index, 1);
  }

  // GET ITEMS
  getItems() {
    return this.items;
  }

  // INCREASE
  increase(index: number) {
    this.items[index].qty++;
  }

  // DECREASE
  decrease(index: number) {
    if (this.items[index].qty > 1) {
      this.items[index].qty--;
    }
  }

  // TOTAL ITEMS COUNT
  getTotalItems(): number {
    return this.items.reduce((sum, item) => sum + item.qty, 0);
  }

  // ✅ FIXED: parsePrice — number ya string dono handle karta hai
  // parseInt(20) = 20 ✅  |  parseInt("Rs.20") = 20 ✅
  // parseInt(19.99) = 19 ❌  →  parseFloat fix karta hai → 19.99 ✅
  parsePrice(price: any): number {
    if (typeof price === 'number') return price;
    const num = parseFloat(String(price).replace(/[^0-9.]/g, ''));
    return isNaN(num) ? 0 : num;
  }

  // TOTAL PRICE
  getTotal(): number {
    return this.items.reduce((total, item) => {
      return total + (this.parsePrice(item.price) * item.qty);
    }, 0);
  }

  // CLEAR CART
  clearCart() {
    this.items = [];
    this.closeCart();
  }
}