import { Component, OnInit } from '@angular/core';
import { Servicecart } from '../servicecart/servicecart';
import { product } from '../product';
import { Servicefav } from '../servicefav/servicefav';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop implements OnInit {

  constructor(
    private cart: Servicecart,
    private productService: product,
    public  fav:  Servicefav,
  ) {}

  selectedProduct: any = null;
  products: any[] = [];

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.products = this.productService.getProducts();
  }

  addToCart(product: any) {
    this.cart.add(product);
  }

  toggleFav(product: any) {
    this.fav.toggleFav(product);
  }

  openDetail(product: any) {
    this.selectedProduct = product;
  }

  closeDetail() {
    this.selectedProduct = null;
  }
}
