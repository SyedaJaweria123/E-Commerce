import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Servicefav {

  private favKey = 'fav_products';

  // localStorage se load
  getFavs(): any[] {
    const stored = localStorage.getItem(this.favKey);
    return stored ? JSON.parse(stored) : [];
  }

  // Check karo koi product fav hai ya nahi
  isFav(productName: string): boolean {
    return this.getFavs().some(p => p.name === productName);
  }

  // Toggle — fav karo ya unfav karo
  toggleFav(product: any): void {
    let favs = this.getFavs();
    const index = favs.findIndex(p => p.name === product.name);
    if (index === -1) {
      favs.push(product);
    } else {
      favs.splice(index, 1);
    }
    localStorage.setItem(this.favKey, JSON.stringify(favs));
  }

  // Remove a specific fav
  removeFav(productName: string): void {
    let favs = this.getFavs().filter(p => p.name !== productName);
    localStorage.setItem(this.favKey, JSON.stringify(favs));
  }

  // Total count
  getFavCount(): number {
    return this.getFavs().length;
  }
}
