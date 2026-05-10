import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth';
import { product } from '../product';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit {

  activeTab: string = 'dashboard';
  currentUser: any  = null;
  users:    any[]   = [];
  products: any[]   = [];

  // ── PRODUCT FORM ──
  pName        = '';
  pDescription = '';
  pPrice: number = 0;
  pImage       = '';
  pImageError  = '';
  editIndex: number | null = null;
  deleteIndex: number | null = null;
  successMsg   = '';
  private msgTimer: any;

  constructor(
    private authService:    AuthService,
    private productService: product,
    private router:         Router
  ) {}

  ngOnInit(): void {
    // ── ADMIN GUARD: sirf admin access kar sakta hai ──
    if (!this.authService.isAdmin()) {
      this.router.navigate(['/']);
      return;
    }
    this.currentUser = this.authService.getCurrentUser();
    this.loadData();
  }

  get tabTitle(): string {
    const titles: any = {
      dashboard: 'Dashboard',
      users:     'User Management',
      products:  'Product Management'
    };
    return titles[this.activeTab] || '';
  }

  loadData(): void {
    this.users    = this.authService.getUsers();
    this.products = this.productService.getProducts();
  }

  getTotalValue(): number {
    return this.products.reduce((sum, p) => sum + Number(p.price || 0), 0);
  }

  // ════════════════════════════════
  // USER ACTIONS
  // ════════════════════════════════
  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.authService.deleteUser(id);
      this.loadData();
    }
  }

  // ════════════════════════════════
  // PRODUCT ACTIONS
  // ════════════════════════════════

  // Image upload with compression
  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (!file) return;
    this.pImageError = '';

    if (!file.type.startsWith('image/')) {
      this.pImageError = 'Sirf image files allowed hain (JPG, PNG, WebP)';
      return;
    }

    const reader = new FileReader();
    reader.onload = (e: any) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX = 800;
        let w = img.width, h = img.height;
        if (w > MAX) { h = Math.round(h * MAX / w); w = MAX; }
        if (h > MAX) { w = Math.round(w * MAX / h); h = MAX; }
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d')!.drawImage(img, 0, 0, w, h);
        this.pImage = canvas.toDataURL('image/jpeg', 0.75);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  saveProduct(): void {
    if (!this.pName.trim() || !this.pDescription.trim() || !this.pPrice) {
      alert('Name, Description aur Price required hain!');
      return;
    }
    if (Number(this.pPrice) <= 0) {
      alert('Price 0 se zyada hona chahiye!');
      return;
    }

    const prod = {
      name:        this.pName.trim(),
      description: this.pDescription.trim(),
      price:       Number(this.pPrice),
      image:       this.pImage || ''
    };

    if (this.editIndex !== null) {
      this.productService.updateProduct(this.editIndex, prod);
      this.showMsg('✅ Product update ho gaya!');
    } else {
      this.productService.addProduct(prod);
      this.showMsg('🎉 Naya product add ho gaya!');
    }

    this.resetProductForm();
    this.loadData();
  }

  editProduct(index: number): void {
    const p        = this.products[index];
    this.pName        = p.name;
    this.pDescription = p.description;
    this.pPrice       = Number(p.price);
    this.pImage       = p.image || '';
    this.editIndex    = index;
    this.pImageError  = '';
    // Scroll to form
    setTimeout(() => {
      document.querySelector('.pm-form-box')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  confirmDelete(index: number): void {
    this.deleteIndex = index;
  }

  deleteProduct(): void {
    if (this.deleteIndex !== null) {
      this.productService.deleteProduct(this.deleteIndex);
      this.deleteIndex = null;
      this.loadData();
      this.showMsg('🗑️ Product delete ho gaya!');
    }
  }

  cancelDelete(): void { this.deleteIndex = null; }

  resetProductForm(): void {
    this.pName        = '';
    this.pDescription = '';
    this.pPrice       = 0;
    this.pImage       = '';
    this.editIndex    = null;
    this.pImageError  = '';
  }

  showMsg(msg: string): void {
    this.successMsg = msg;
    clearTimeout(this.msgTimer);
    this.msgTimer = setTimeout(() => this.successMsg = '', 3000);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}