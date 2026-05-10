import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

import { AppRoutingModule }   from './app-routing-module';
import { App }                from './app';
import { Navbar }             from './navbar/navbar';
import { Home }               from './home/home';
import { Shop }               from './shop/shop';
import { Contact }            from './contact/contact';
import { FAQs }               from './faqs/faqs';
import { Login }              from './login/login';
import { Signup }             from './signup/signup';
import { Button }             from './button/button';
import { Addtocart }          from './addtocart/addtocart';
import { CHECKOUT }           from './checkout/checkout';
import { Service }            from './service/service';
import { Admin }              from './admin/admin';
import { Cartpage }           from './cartpage/cartpage';
import { Searchpage }         from './searchpage/searchpage';
import { Favourites }         from './favourites/favourites';
import { CategoryShop }       from './category-shop/category-shop';

// Standalone
import { ProductManagement }  from './product-management/product-management';
import { Footer }             from './footer/footer';

@NgModule({
  declarations: [
    App,
    Navbar,
    Home,
    Shop,
    Contact,
    FAQs,
    Login,
    Signup,
    Button,
    Addtocart,
    CHECKOUT,
    Service,
    Admin,
    Cartpage,
    Searchpage,
    Favourites,
    CategoryShop,   // ← NEW
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    RouterOutlet,
    FormsModule,
    ProductManagement,
    Footer,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    DatePipe,
    DecimalPipe,
  ],
  bootstrap: [App],
})
export class AppModule {}
