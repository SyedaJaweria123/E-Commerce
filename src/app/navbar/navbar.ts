import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth';
import { Servicecart } from '../servicecart/servicecart';
import { product } from '../product';
import { ModalService } from '../modal.service';
import { Servicefav } from '../servicefav/servicefav';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit, OnDestroy {

  isMenuOpen    = false;
  isProfileOpen = false;
  isSearchOpen  = false;
  currentUser: any = null;

  searchQuery    = '';
  searchResults: any[] = [];
  private allProducts: any[] = [];
  private userSub!: Subscription;

  // ── Dropdown categories — label, icon, aur route ──────────
  shopCategories = [
    { label: 'All Products',      icon: '', route: '/shop'                    },
    { label: 'Skin Care',         icon: '', route: '/category/facecare'       },
    { label: 'Hair Care',         icon: '', route: '/category/hair'           },
    { label: 'Basic Makeup',    icon: '', route: '/category/makeup'         },
    { label: 'Perfumes',          icon: '', route: '/category/perfume'        },
    { label: 'Moisturizer Cream', icon: '', route: '/category/moisturizer'    },
    { label: 'Lipstick',          icon: '', route: '/category/lipstick'       },
    { label: 'Serum',             icon: '', route: '/category/serum'          },
    { label: 'Toner',             icon: '', route: '/category/toner'          },
  ];

  constructor(
    public  cart: Servicecart,
    private authService: AuthService,
    private router: Router,
    private productService: product,
    public  modal: ModalService,
    public  fav:  Servicefav,
  ) {}

  ngOnInit() {
    this.allProducts = this.productService.getProducts();
    this.userSub = this.authService.currentUser$.subscribe(u => this.currentUser = u);
  }

  ngOnDestroy() { this.userSub?.unsubscribe(); }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) this.isProfileOpen = false;
  }
  closeMenu() { this.isMenuOpen = false; }

  // ── Category navigate ─────────────────────────────────────
  goToCategory(cat: any) {
    this.router.navigate([cat.route]);
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    if (this.isSearchOpen) {
      this.allProducts   = this.productService.getProducts();
      this.searchQuery   = '';
      this.searchResults = [];
    }
    this.isProfileOpen = false;
  }
  closeSearch() {
    this.isSearchOpen  = false;
    this.searchQuery   = '';
    this.searchResults = [];
  }

  onSearch() {
    const q = this.searchQuery.trim().toLowerCase();
    if (q.length < 1) { this.searchResults = []; return; }
    this.searchResults = this.allProducts
      .filter(p => p.name?.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q))
      .slice(0, 6);
  }

  goToSearch() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search'], { queryParams: { q: this.searchQuery.trim() } });
      this.closeSearch();
    }
  }

  toggleProfile(event: Event) {
    event.stopPropagation();
    this.isProfileOpen = !this.isProfileOpen;
  }

  @HostListener('document:click')
  closeProfileDropdown() { this.isProfileOpen = false; }

  get initials(): string {
    if (!this.currentUser?.name) return '?';
    return this.currentUser.name.trim()
      .split(' ').map((w: string) => w[0] ?? '')
      .join('').toUpperCase().slice(0, 2);
  }

  openLogin() { this.modal.openLogin(); this.closeMenu(); }

  logout() {
    this.authService.logout();
    this.isProfileOpen = false;
    this.isMenuOpen    = false;
    this.router.navigate(['/']);
  }
}
