import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../product';
import { Servicecart } from '../servicecart/servicecart';
import { Servicefav } from '../servicefav/servicefav';

@Component({
  selector: 'app-searchpage',
  standalone: false,
  templateUrl: './searchpage.html',
  styleUrl: './searchpage.css',
})
export class Searchpage implements OnInit {

  searchQuery   = '';
  searchResults: any[] = [];
  allProducts:   any[] = [];
  selectedProduct: any = null;

  constructor(
    private route:          ActivatedRoute,
    private productService: product,
    private cart:           Servicecart,
    public  fav:            Servicefav,
  ) {}

  ngOnInit(): void {
    this.allProducts = this.productService.getProducts();

    // URL mein ?q=... query param milega
    this.route.queryParams.subscribe(params => {
      const q = params['q'] || '';
      this.searchQuery   = q;
      this.doSearch(q);
    });
  }

  doSearch(q: string) {
    const query = q.trim().toLowerCase();
    if (!query) {
      this.searchResults = [];
      return;
    }
    this.searchResults = this.allProducts.filter(p =>
      p.name?.toLowerCase().includes(query) ||
      p.description?.toLowerCase().includes(query)
    );
  }

  onInput() {
    this.doSearch(this.searchQuery);
  }

  addToCart(p: any) {
    this.cart.add(p);
  }

  toggleFav(p: any) {
    this.fav.toggleFav(p);
  }

  openDetail(p: any) {
    this.selectedProduct = p;
  }

  closeDetail() {
    this.selectedProduct = null;
  }
}
