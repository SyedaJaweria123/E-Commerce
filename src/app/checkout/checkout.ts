import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { Servicecart } from '../servicecart/servicecart';  // ✅ Servicecart use karo

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.html',
  standalone: false,
  styleUrls: ['./checkout.css']
})
export class CHECKOUT implements OnInit {

  constructor(
    private router: Router,
    public cart: Servicecart   // ✅ Servicecart — yehi sahi hai
  ) {}

  // STEP tracker (1 = Contact, 2 = Shipping)
  currentStep = 1;

  // ── FORM FIELDS ──
  email      = '';
  firstName  = '';
  lastName   = '';
  address1   = '';
  address2   = '';
  province   = '';
  city       = '';
  postalCode = '';
  phone      = '';
  payment    = 'cod';   // cod | card

  // Card fields
  cardNumber = '';
  cardName   = '';
  cardExpiry = '';
  cardCvv    = '';

  // Messages
  errorMsg   = '';
  successMsg = '';
  loading    = false;

  // Pakistan cities
  cities = [
    'Karachi','Lahore','Islamabad','Rawalpindi','Faisalabad',
    'Multan','Peshawar','Quetta','Sialkot','Gujranwala',
    'Hyderabad','Abbottabad','Bahawalpur','Sargodha','Sukkur'
  ];

  provinces = [
    'Punjab','Sindh','KPK','Balochistan',
    'Gilgit-Baltistan','Azad Kashmir','ICT'
  ];

  ngOnInit(): void {
    // ✅ Servicecart se items aate hain — koi alag service nahi
    if (this.cart.getItems().length === 0) {
      // Cart empty hai to shop par bhejo
      // this.router.navigate(['/shop']);
    }
  }

  // ── HELPERS ──
  get cartItems()  { return this.cart.getItems(); }

  get subtotal()   { return this.cart.getTotal(); }

  get shipping()   { return this.subtotal >= 8000 ? 0 : 200; }

  get fbrTax()     { return Math.round(this.subtotal * 0.001); }  // 0.1% FBR POS

  get grandTotal() { return this.subtotal + this.shipping + this.fbrTax; }

  parsePrice(p: any) { return this.cart.parsePrice(p); }

  // ── STEP 1: Proceed to Shipping ──
  proceedToShipping() {
    this.errorMsg = '';
    if (!this.email) {
      this.errorMsg = 'Please enter your email!';
      return;
    }
    this.currentStep = 2;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ── PLACE ORDER ──
  placeOrder() {
    this.errorMsg  = '';
    this.successMsg = '';

    if (!this.firstName || !this.lastName || !this.address1 ||
        !this.city || !this.province || !this.phone) {
      this.errorMsg = 'Please fill all required fields!';
      return;
    }

    if (this.payment === 'card') {
      if (!this.cardNumber || !this.cardName || !this.cardExpiry || !this.cardCvv) {
        this.errorMsg = 'Please fill all card details!';
        return;
      }
    }

    this.loading = true;

    setTimeout(() => {
      this.successMsg = 'Order placed successfully! 🎉';
      this.downloadInvoice();
      this.cart.clearCart();
      this.loading = false;
      setTimeout(() => this.router.navigate(['/shop']), 1800);
    }, 1000);
  }

  // ── PDF INVOICE ──
  downloadInvoice() {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Cosmetopia — Order Invoice', 20, 20);
    doc.setFontSize(11);
    doc.text(`Customer: ${this.firstName} ${this.lastName}`, 20, 35);
    doc.text(`Email: ${this.email}`, 20, 43);
    doc.text(`Address: ${this.address1}, ${this.city}`, 20, 51);
    doc.text(`Phone: ${this.phone}`, 20, 59);

    let y = 75;
    doc.setFontSize(12);
    doc.text('Items:', 20, y); y += 10;

    this.cartItems.forEach((item: any) => {
      doc.text(
        `${item.name}  x${item.qty}  Rs.${this.parsePrice(item.price) * item.qty}`,
        20, y
      );
      y += 9;
    });

    y += 6;
    doc.text(`Subtotal:  Rs.${this.subtotal}`, 20, y); y += 9;
    doc.text(`Shipping:  Rs.${this.shipping}`, 20, y); y += 9;
    doc.text(`Total:     Rs.${this.grandTotal}`, 20, y);
    doc.save('cosmetopia-invoice.pdf');
  }
}