import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {

  currentSlide = 0;
  cardsPerView = 4;          // 4 cards visible at a time

  categories = [
     {
      label: 'Skin Care',
      desc: 'Gentle routines for radiant skin',
      image: 'assets/images/skincare/skincarehome.jpg',
      fallback: 'https://cdn-icons-png.flaticon.com/256/2553/2553660.png',
      query: 'face'
    },
   
    {
      label: 'Basic Makeup',
      desc: 'Professional tools for flawless finish',
      image: 'assets/images/makeup/makeuphome.jpg',
      query: 'makeup'
    },
    {
      label: 'Perfumes',
      desc: 'Signature scents for every mood',
      image: 'assets/images/perfume/perfumehome.jpg',
      query: 'perfume'
    },
     {
      label: 'Hair Care',
      desc: 'Nourish & strengthen every strand',
      image: 'assets/images/Hair/hairhome.jpg',
      query: 'hair'
    },
    {
      label: 'Moisturizer',
      desc: 'Deep hydration for glowing skin',
      image: 'assets/images/mos/moshome.jpg',
      query: 'moisturizer'
    },
    {
      label: 'Lipstick',
      desc: 'Bold colors, long-lasting wear',
      image: 'assets/images/lipstick/lipstickhome.jpg',
      query: 'lipstick'
    },
   
    {
      label: 'Serum',
      desc: 'Targeted treatments that transform',
      image: 'assets/images/ESerum.jpg',
      query: 'serum'
    },
    {
      label: 'Toner',
      icon: '💧',
      desc: 'Balance & prep your skin daily',
      image: 'assets/images/toner/tonerhome.jpg',
      fallback: 'https://cdn-icons-png.flaticon.com/256/2553/2553636.png',
      query: 'toner'
    },
  ];

  features = [
    { icon: 'fas fa-truck',   title: 'FAST SHIPPING',       desc: 'Fast shipping all over Pakistan' },
    { icon: 'fas fa-headset', title: 'SUPPORT 24/7',         desc: 'Contact us 24 hours a day, 7 days a week' },
    { icon: 'fas fa-undo',    title: '30 DAYS RETURN',       desc: 'Simply return it within 30 days for an exchange.' },
    { icon: 'fas fa-lock',    title: '100% PAYMENT SECURE',  desc: 'We ensure secure payment' },
  ];

  // Total number of slides = total cards − cards visible per view
  get maxSlide(): number {
    return this.categories.length - this.cardsPerView;
  }

  // Dot array length = maxSlide + 1
  get dotArray(): any[] {
    return Array(this.maxSlide + 1).fill(0);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Responsive: adjust cardsPerView on resize
    this.updateCardsPerView();
    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.updateCardsPerView();
    // Clamp currentSlide
    if (this.currentSlide > this.maxSlide) {
      this.currentSlide = this.maxSlide;
    }
  };

  updateCardsPerView() {
    const w = window.innerWidth;
    if (w < 480)       this.cardsPerView = 1;
    else if (w < 768)  this.cardsPerView = 2;
    else if (w < 1024) this.cardsPerView = 3;
    else               this.cardsPerView = 4;
  }

  prevSlide() {
    if (this.currentSlide > 0) this.currentSlide--;
  }

  nextSlide() {
    if (this.currentSlide < this.maxSlide) this.currentSlide++;
  }

  goToSlide(i: number) {
    this.currentSlide = i;
  }

  goToCat(c: any) {
    this.router.navigate(['/shop'], c.query ? { queryParams: { cat: c.query } } : {});
  }
}