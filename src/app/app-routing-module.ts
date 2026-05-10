import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home }              from './home/home';
import { Shop }              from './shop/shop';
import { FAQs }              from './faqs/faqs';
import { Contact }           from './contact/contact';
import { Login }             from './login/login';
import { Signup }            from './signup/signup';
import { Button }            from './button/button';
import { CHECKOUT }          from './checkout/checkout';
import { Service }           from './service/service';
import { Admin }             from './admin/admin';
import { Cartpage }          from './cartpage/cartpage';
import { Searchpage }        from './searchpage/searchpage';
import { Favourites }        from './favourites/favourites';

import { Mois }              from './mois/mois';
import { CategoryShop }      from './category-shop/category-shop';

const routes: Routes = [
  { path: '',            component: Home },
  { path: 'home',        component: Home },
  { path: 'shop',        component: Shop },
  { path: 'faqs',        component: FAQs },
  { path: 'contact',     component: Contact },
  { path: 'login',       component: Login },
  { path: 'signup',      component: Signup },
  { path: 'button',      component: Button },
  { path: 'addtocard',   component: Cartpage },
  { path: 'checkout',    component: CHECKOUT },
  { path: 'service',     component: Service },
  { path: 'admin',       component: Admin },
  { path: 'search',      component: Searchpage },
  { path: 'favourites',  component: Favourites },

  // ── CATEGORY SHOP PAGES ──────────────────────────────
  // Har navbar dropdown item ka apna route
  { path: 'category/:category', component: CategoryShop },

  // Shortcut direct routes (navbar links ke liye)
  { path: 'facecare',    redirectTo: 'category/facecare',    pathMatch: 'full' },
  { path: 'haircare',    redirectTo: 'category/hair',        pathMatch: 'full' },
  { path: 'makeup',      redirectTo: 'category/makeup',      pathMatch: 'full' },
  { path: 'perfume',     redirectTo: 'category/perfume',     pathMatch: 'full' },
  { path: 'moisturizer', redirectTo: 'category/moisturizer', pathMatch: 'full' },
  { path: 'lipstick',    redirectTo: 'category/lipstick',    pathMatch: 'full' },
  { path: 'serum',       redirectTo: 'category/serum',       pathMatch: 'full' },
  { path: 'toner',       redirectTo: 'category/toner',       pathMatch: 'full' },
  // ─────────────────────────────────────────────────────

  { path: 'product-management', redirectTo: 'admin', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
