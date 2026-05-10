import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.html',
  styleUrls: ['./product-management.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ProductManagement implements OnInit {

  products: any[] = [];

  // FORM DATA
  name: string = '';
  description: string = '';
  price: number = 0;
  image: string = '';
  imageError: string = '';

  // EDIT MODE
  editIndex: number | null = null;

  // DELETE CONFIRM
  deleteIndex: number | null = null;

  // MESSAGE
  successMsg: string = '';
  private msgTimer: any;

  constructor(private productService: product) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // LOAD
  loadProducts() {
    this.products = this.productService.getProducts();
  }

  // IMAGE UPLOAD — compress to max 800px width, quality 0.75
  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    this.imageError = '';

    // Check file type
    if (!file.type.startsWith('image/')) {
      this.imageError = 'Sirf image files allowed hain (JPG, PNG, WebP)';
      return;
    }

    const reader = new FileReader();
    reader.onload = (e: any) => {
      const img = new Image();
      img.onload = () => {
        // Canvas pe draw karke compress karo
        const canvas = document.createElement('canvas');
        const MAX_W = 800;
        const MAX_H = 800;
        let w = img.width;
        let h = img.height;

        if (w > MAX_W) { h = Math.round(h * MAX_W / w); w = MAX_W; }
        if (h > MAX_H) { w = Math.round(w * MAX_H / h); h = MAX_H; }

        canvas.width  = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d')!;
        ctx.drawImage(img, 0, 0, w, h);

        // JPEG 75% quality — ~50-100KB ho jati hai
        this.image = canvas.toDataURL('image/jpeg', 0.75);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  // TOTAL VALUE
  getTotalValue(): number {
    return this.products.reduce((sum, p) => sum + Number(p.price), 0);
  }

  // ADD / UPDATE
  saveProduct() {
    if (!this.name.trim() || !this.description.trim() || !this.price) {
      alert('Please fill all required fields (Name, Description, Price)');
      return;
    }

    if (Number(this.price) <= 0) {
      alert('Price must be greater than 0');
      return;
    }

    const prod = {
      name: this.name.trim(),
      description: this.description.trim(),
      price: Number(this.price),
      image: this.image || ''
    };

    if (this.editIndex !== null) {
      this.productService.updateProduct(this.editIndex, prod);
      this.showMsg('Product updated ✅');
    } else {
      this.productService.addProduct(prod);
      this.showMsg('Product added 🎉');
    }

    this.resetForm();
    this.loadProducts();
  }

  // EDIT
  editProduct(index: number) {
    const p = this.products[index];
    this.name        = p.name;
    this.description = p.description;
    this.price       = Number(p.price);
    this.image       = p.image || '';
    this.editIndex   = index;
    this.imageError  = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // DELETE CONFIRM
  confirmDelete(index: number) {
    this.deleteIndex = index;
  }

  deleteProduct() {
    if (this.deleteIndex !== null) {
      this.productService.deleteProduct(this.deleteIndex);
      this.deleteIndex = null;
      this.loadProducts();
      this.showMsg('Product deleted 🗑️');
    }
  }

  cancelDelete() {
    this.deleteIndex = null;
  }

  // RESET
  resetForm() {
    this.name        = '';
    this.description = '';
    this.price       = 0;
    this.image       = '';
    this.editIndex   = null;
    this.imageError  = '';
  }

  // SUCCESS MESSAGE (auto hide)
  showMsg(msg: string) {
    this.successMsg = msg;
    clearTimeout(this.msgTimer);
    this.msgTimer = setTimeout(() => this.successMsg = '', 3000);
  }
}