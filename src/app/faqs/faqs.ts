import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  standalone: false,
  templateUrl: './faqs.html',
  styleUrl: './faqs.css',
})
export class FAQs {

  openCategory: string | null = null;

  categories = [
    {
      id: 'account',
      label: 'My Account',
      faqs: [
        { q: 'How do I create an account?', a: 'Click on "Sign Up" in the navigation bar, fill in your name, email, and password, and you\'re good to go!', open: false },
        { q: 'I forgot my password. What do I do?', a: 'Please contact our support team via the Contact page and we will reset your password. A self-service reset feature is coming soon.', open: false },
        { q: 'Is my personal data safe?', a: 'Yes. We do not share your personal data with third parties. Your information is only used for order processing and communication.', open: false },
      ]
    },
    {
      id: 'orders',
      label: 'Orders',
      faqs: [
        { q: '1. How can I place an order?', a: 'Once you have added all your desired items to your shopping cart, follow these instructions:\n\n· Click on the "Shopping Bag" icon and proceed to checkout\n· Enter all your required contact, shipping and billing information\n· Click on "Continue to Payment" and select your preferred payment method\n· Click on \'Complete Order\' and check your email for an order confirmation email\n\nIf you have signed in to your account, we will have your shipping and billing information stored.', open: false },
        { q: '2. Can I place an order on call?', a: 'Yes, you can place your order by calling us at +92 300 1234567 (9AM - 6PM) and providing us with the required product code and size/colour variant of the product you want to purchase.', open: false },
        { q: '3. Can I modify or cancel my order after placing it?', a: 'You can cancel or modify your order within 2 hours of placing it. After that, the order is processed and cannot be changed.', open: false },
        { q: '4. How will I know my order is confirmed?', a: 'You will receive a confirmation email with your order details shortly after placing the order.', open: false },
      ]
    },
    {
      id: 'payments',
      label: 'Payments',
      faqs: [
        { q: '1. What payment methods do you accept?', a: 'We accept Cash on Delivery (COD), bank transfers, and major credit/debit cards.', open: false },
        { q: '2. Is online payment secure?', a: 'Yes, all online transactions are secured with SSL encryption. We do not store your card details.', open: false },
        { q: '3. Can I pay on delivery?', a: 'Yes! Cash on Delivery is available across Pakistan. Simply select COD at checkout.', open: false },
      ]
    },
    {
      id: 'delivery',
      label: 'Delivery',
      faqs: [
        { q: '1. What is the delivery time?', a: 'Standard delivery within Lahore takes 1–2 working days. Other cities in Pakistan take 3–5 working days.', open: false },
        { q: '2. How much does shipping cost?', a: 'Shipping is FREE on orders above PKR 2,000. For orders below that, a flat delivery charge of PKR 150 applies.', open: false },
        { q: '3. Do you ship internationally?', a: 'Currently we only ship within Pakistan. International shipping is coming soon — stay tuned!', open: false },
      ]
    },
    {
      id: 'security',
      label: 'Security',
      faqs: [
        { q: '1. Is my personal information secure?', a: 'Yes. We use industry-standard SSL encryption to protect your data. We never share your information with third parties.', open: false },
        { q: '2. Are your products 100% original?', a: 'Yes! We source all products directly from authorized distributors. Every product comes with an authenticity guarantee.', open: false },
      ]
    },
    {
      id: 'exchanges',
      label: 'Exchanges',
      faqs: [
        { q: '1. What is your return policy?', a: 'We accept returns within 7 days of delivery. The product must be unused, in original packaging, and with receipt.', open: false },
        { q: '2. How do I initiate a return or exchange?', a: 'Contact us via the Contact page or WhatsApp with your order ID and reason for return. Our team will guide you through the process.', open: false },
        { q: '3. When will I receive my refund?', a: 'Refunds are processed within 5–7 working days after we receive the returned product.', open: false },
      ]
    },
  ];

  toggleCategory(id: string) {
    this.openCategory = this.openCategory === id ? null : id;
    this.categories.forEach(c => c.faqs.forEach(f => f.open = false));
  }

  toggleFaq(faq: any) {
    faq.open = !faq.open;
  }
}