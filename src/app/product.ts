import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class product {

  products: any[] = [];

  private defaultProducts: any[] = [

    // ── ORIGINAL PRODUCTS ──────────────────────────────────
    {
      name: 'Soft Touch Moisturizing Cream',
      price: 3999,
      description: 'Rich moisturizing cream that locks in hydration and improves skin elasticity. Ideal for dry and sensitive skin.',
      image: 'assets/images/nude.jpg',
      category: 'moisturizer'
    },
    {
      name: 'Fig Foam Deep Cleanser',
      price: 2499,
      description: 'Foaming cleanser that removes dirt, oil, and makeup effectively. Leaves skin clean, fresh, and soft.',
      image: 'assets/images/Fig.jpg',
      category: 'facecare'
    },
    {
      name: 'Vitamin Repair Face Serum',
      price: 5999,
      description: 'Concentrated facial serum designed to repair damaged skin, improve texture, and boost natural glow. Fast-absorbing and suitable for all skin types.',
      image: 'assets/images/Repair.jpg',
      category: 'serum'
    },
    {
      name: 'Pink Radiance Face Toner',
      price: 5799,
      description: 'Gentle toner that refreshes and balances skin. Helps tighten pores and prepare skin for further skincare steps.',
      image: 'assets/images/Toner.jpg',
      category: 'toner'
    },
    {
      name: 'Vitamin Repair Face Serum',
      price: 8999,
      description: 'Concentrated facial serum designed to repair damaged skin, improve texture, and boost natural glow. Fast-absorbing and suitable for all skin types.',
      image: 'assets/images/RepairFace.jpg',
      category: 'serum'
    },
    {
      name: 'Pomegranate Exfoliating Face Scrub',
      price: 3999,
      description: 'Gentle exfoliating face scrub enriched with pomegranate extract that helps remove dead skin cells and unclog pores. Smooth, soft, and refreshed skin.',
      image: 'assets/images/Skinscrub.jpg',
      category: 'facecare'
    },
    {
      name: 'Glow Boost Vitamin E Serum',
      price: 5999,
      description: 'Concentrated facial serum designed to repair damaged skin, improve texture, and boost natural glow. Fast-absorbing and suitable for all skin types.',
      image: 'assets/images/ESerum.jpg',
      category: 'serum'
    },
    {
      name: 'Blossom Glow Body Wash',
      price: 3499,
      description: 'Soft floral body wash jo skin ko gently clean kare, fresh feel de aur smooth glowing skin banaye.',
      image: 'assets/images/BodyWash.jpg',
      category: 'facecare'
    },

    // ── FACE CARE ──────────────────────────────────────────
    {
      name: 'Vitamin Repair Face Serum',
      price: 5999,
      description: 'Concentrated facial serum designed to repair damaged skin, improve texture, and boost natural glow.',
      image: 'assets/images/skincare/skin2.jpg',
      category: 'facecare'
    },
    {
      name: 'Brightening Face Mask',
      price: 4299,
      description: 'Weekly face mask that deeply cleanses pores and brightens dull skin for a fresh radiant look.',
      image: 'assets/images/skincare/skin7.jpg',
      category: 'facecare'
    },
    {
      name: 'Hydra-Glow Night Cream',
      price: 6499,
      description: 'Night repair cream that works while you sleep to restore moisture and revive tired skin.',
      image: 'assets/images/skincare/skin8.jpg',
      category: 'facecare'
    },

    // ── HAIR CARE ──────────────────────────────────────────
    {
      name: 'Argan Oil Hair Serum',
      price: 2999,
      description: 'Lightweight serum that tames frizz, adds shine, and protects hair from heat damage.',
      image: 'assets/images/Hair/hair.jpg',
      category: 'hair'
    },
    {
      name: 'Deep Repair Hair Mask',
      price: 3499,
      description: 'Intense conditioning mask for dry and damaged hair. Restores softness and manageability.',
      image: 'assets/images/Hair/hair1.jpg',
      category: 'hair'
    },
    {
      name: 'Biotin Strengthening Shampoo',
      price: 2199,
      description: 'Sulfate-free shampoo enriched with biotin that cleanses gently and reduces hair fall.',
      image: 'assets/images/Hair/hair2.jpg',
      category: 'hair'
    },
    {
      name: 'Keratin Smoothing Conditioner',
      price: 2599,
      description: 'Keratin-infused conditioner that detangles, smoothens, and adds a glossy finish.',
      image: 'assets/images/Hair/hair3.jpg',
      category: 'hair'
    },
    {
      name: 'Scalp Nourishing Hair Oil',
      price: 1899,
      description: 'Traditional blend of oils for scalp nourishment and healthy hair growth.',
      image: 'assets/images/Hair/hair4.jpg',
      category: 'hair'
    },
    {
      name: 'Volumizing Hair Spray',
      price: 2799,
      description: 'Adds lasting volume and hold without making hair stiff or sticky.',
      image: 'assets/images/Hair/hair5.jpg',
      category: 'hair'
    },
    {
      name: 'Anti-Dandruff Hair Treatment',
      price: 3199,
      description: 'Medicated treatment that soothes the scalp and eliminates dandruff effectively.',
      image: 'assets/images/Hair/hair6.jpg',
      category: 'hair'
    },

    // ── MAKEUP BRUSHES ─────────────────────────────────────
    {
      name: 'Foundation Blending Brush',
      price: 1499,
      description: 'Ultra-soft synthetic bristles for seamless foundation blending. Perfect for liquid and cream formulas.',
      image: 'assets/images/makeup/makeup.jpg',
      category: 'makeup'
    },
    {
      name: 'Kabuki Powder Brush',
      price: 1299,
      description: 'Dense dome-shaped brush for powder, bronzer, and blush application. Gives an airbrushed finish.',
      image: 'assets/images/makeup/makeup.jpg',
      category: 'makeup'
    },
    {
      name: 'Contour & Highlight Set',
      price: 2499,
      description: 'Duo-fiber brush set designed for precise contouring and highlighting on cheeks and nose.',
      image: 'assets/images/makeup/makeup.jpg',
      category: 'makeup'
    },
    {
      name: 'Eye Shadow Blending Brush',
      price: 999,
      description: 'Fluffy blending brush that blends and diffuses eye shadows for a beautiful gradient.',
      image: 'assets/images/makeup/makeup.jpg',
      category: 'makeup'
    },
    {
      name: 'Angled Liner Brush',
      price: 799,
      description: 'Fine angled brush for precise eyeliner and eyebrow definition.',
      image: 'assets/images/makeup/makeup.jpg',
      category: 'makeup'
    },
    {
      name: '12-Piece Pro Brush Set',
      price: 4999,
      description: 'Complete professional brush set with all essential tools for a full face of makeup.',
      image: 'assets/images/makeup/makeup.jpg',
      category: 'makeup'
    },

    // ── PERFUMES ───────────────────────────────────────────
    {
      name: 'Rose Oud Eau de Parfum',
      price: 8999,
      description: 'A luxurious blend of Bulgarian rose and deep oud wood. Long-lasting oriental fragrance for evenings.',
      image: 'assets/images/perfume/perfumehome.jpg',
      category: 'perfume'
    },
    {
      name: 'Fresh Citrus Body Mist',
      price: 2499,
      description: 'Light refreshing mist with notes of bergamot, lemon, and white musk. Perfect for daily use.',
      image: 'assets/images/perfume/perfumehome.jpg',
      category: 'perfume'
    },
    {
      name: 'Midnight Jasmine EDP',
      price: 7499,
      description: 'Seductive floral fragrance with jasmine, sandalwood, and vanilla for a confident sophisticated aura.',
      image: 'assets/images/perfume/perfumehome.jpg',
      category: 'perfume'
    },
    {
      name: 'Pink Blossoms EDT',
      price: 5499,
      description: 'Feminine and playful scent with peony, raspberry, and soft musk. Great for everyday wear.',
      image: 'assets/images/perfume/perfumehome.jpg',
      category: 'perfume'
    },
    {
      name: 'Gold Amber Parfum',
      price: 11999,
      description: 'Rich warm fragrance with amber, patchouli, and spice. A statement scent for special occasions.',
      image: 'assets/images/perfume/perfumehome.jpg',
      category: 'perfume'
    },

    // ── MOISTURIZER ────────────────────────────────────────
    {
      name: 'Hyaluronic Acid Gel Cream',
      price: 5499,
      description: 'Lightweight gel moisturizer with hyaluronic acid that provides 72-hour hydration without clogging pores.',
      image: 'assets/images/mos/mos2.jpg',
      category: 'moisturizer'
    },
    {
      name: 'Shea Butter Rich Cream',
      price: 3999,
      description: 'Thick nourishing cream with shea butter and vitamin E for extremely dry and flaky skin.',
      image: 'assets/images/mos/mos3.jpg',
      category: 'moisturizer'
    },
    {
      name: 'SPF 30 Day Moisturizer',
      price: 4799,
      description: 'Daily moisturizer with built-in SPF 30 protection. Hydrates and shields from UV damage.',
      image: 'assets/images/mos/mos4.jpg',
      category: 'moisturizer'
    },
    {
      name: 'Aloe Vera Soothing Gel',
      price: 2199,
      description: 'Calming gel moisturizer with pure aloe vera extract. Ideal for sensitive and irritated skin.',
      image: 'assets/images/nude.jpg',
      category: 'moisturizer'
    },
    {
      name: 'Retinol Night Moisturizer',
      price: 6999,
      description: 'Anti-aging night cream with retinol and peptides that reduces fine lines and firms skin overnight.',
      image: 'assets/images/mos/moshome.jpg',
      category: 'moisturizer'
    },

    // ── LIPSTICK ───────────────────────────────────────────
    {
      name: 'Velvet Matte Lipstick – Red',
      price: 1899,
      description: 'Long-wearing matte lipstick in classic red. Rich pigment, non-drying formula for all-day wear.',
      image: 'assets/images/lipstick/lipstick1.jpg',
      category: 'lipstick'
    },
    {
      name: 'Glossy Nude Lip Color',
      price: 1699,
      description: 'Hydrating glossy lip color in a flattering nude shade. Plumps and moisturizes lips.',
      image: 'assets/images/lipstick/lip1.jpg',
      category: 'lipstick'
    },
    {
      name: 'Berry Crush Satin Lipstick',
      price: 1799,
      description: 'Satin-finish lipstick in deep berry. Creamy formula that glides on smoothly and stays put.',
      image: 'assets/images/lipstick/lip2.jpg',
      category: 'lipstick'
    },
    {
      name: 'Coral Bliss Lip Colour',
      price: 1599,
      description: 'Fresh coral shade with a semi-matte finish. Light formula that feels comfortable all day.',
      image: 'assets/images/lipstick/lip3.jpg',
      category: 'lipstick'
    },
    {
      name: 'Rosewood Lip Crayon',
      price: 1299,
      description: 'Easy-to-apply lip crayon in rosewood. Glides smoothly for precise application.',
      image: 'assets/images/lipstick/lip4.jpg',
      category: 'lipstick'
    },
    {
      name: 'Plum Perfect Matte',
      price: 1899,
      description: 'Deep plum matte lipstick with intense colour payoff and a velvety finish.',
      image: 'assets/images/lipstick/lip5.jpg',
      category: 'lipstick'
    },
    {
      name: 'Soft Pink Tinted Balm',
      price: 1099,
      description: 'Sheer tinted balm that nourishes lips while adding a subtle pink glow.',
      image: 'assets/images/lipstick/lip6.jpg',
      category: 'lipstick'
    },
    {
      name: 'Bold Burgundy Lipstick',
      price: 1999,
      description: 'Statement burgundy shade with ultra-pigmented matte formula for a powerful look.',
      image: 'assets/images/lipstick/lip7.jpg',
      category: 'lipstick'
    },
    {
      name: 'Peach Dream Gloss',
      price: 1399,
      description: 'High-shine gloss in peachy nude. Adds volume and hydration to lips.',
      image: 'assets/images/lipstick/lip8.jpg',
      category: 'lipstick'
    },
    {
      name: 'Cherry Red Liquid Lip',
      price: 2199,
      description: 'Liquid lipstick in vivid cherry red with a matte transfer-proof formula.',
      image: 'assets/images/lipstick/lip9.jpg',
      category: 'lipstick'
    },
    {
      name: 'Ombre Lip Set',
      price: 2999,
      description: 'Two-shade ombre lip kit for a gradient effect. Includes liner and gloss.',
      image: 'assets/images/lipstick/lip10.jpg',
      category: 'lipstick'
    },

    // ── SERUM ──────────────────────────────────────────────
    {
      name: 'Vitamin C Brightening Serum',
      price: 5999,
      description: 'Concentrated Vitamin C serum that fades dark spots, evens skin tone, and boosts radiance.',
      image: 'assets/images/Repair.jpg',
      category: 'serum'
    },
    {
      name: 'Retinol Anti-Aging Serum',
      price: 7499,
      description: 'Retinol serum that reduces fine lines, firms skin, and improves overall texture. Use at night.',
      image: 'assets/images/RepairFace.jpg',
      category: 'serum'
    },
    {
      name: 'Hyaluronic Acid Hydrating Serum',
      price: 5499,
      description: 'Ultra-hydrating serum with multiple molecular weights of hyaluronic acid for plump bouncy skin.',
      image: 'assets/images/ESerum.jpg',
      category: 'serum'
    },
    {
      name: 'Niacinamide 10% + Zinc Serum',
      price: 3999,
      description: 'Pore-minimizing serum that controls oil, reduces blemishes, and brightens uneven skin tone.',
      image: 'assets/images/Repair.jpg',
      category: 'serum'
    },
    {
      name: 'Peptide Complex Firming Serum',
      price: 8499,
      description: 'Multi-peptide serum that supports collagen production and visibly lifts and firms skin.',
      image: 'assets/images/RepairFace.jpg',
      category: 'serum'
    },
    {
      name: 'AHA BHA Exfoliating Serum',
      price: 4799,
      description: 'Chemical exfoliant serum that unclogs pores, smoothens texture, and brings a healthy glow.',
      image: 'assets/images/ESerum.jpg',
      category: 'serum'
    },

    // ── TONER ──────────────────────────────────────────────
    {
      name: 'Rose Water Toning Mist',
      price: 2499,
      description: 'Gentle rose water toner that hydrates, soothes redness, and preps skin for moisturizer.',
      image: 'assets/images/toner/toner1.jpg',
      category: 'toner'
    },
    {
      name: 'Pore Tightening Toner',
      price: 3299,
      description: 'Astringent toner with witch hazel and salicylic acid that minimizes pores and controls oil.',
      image: 'assets/images/toner/toner2.jpg',
      category: 'toner'
    },
    {
      name: 'Glycolic Acid Exfoliating Toner',
      price: 3999,
      description: 'Chemical exfoliating toner with glycolic acid for smoother brighter skin. Use 2-3 times a week.',
      image: 'assets/images/toner/toner3.jpg',
      category: 'toner'
    },
    {
      name: 'Hydrating Essence Toner',
      price: 4299,
      description: 'Korean-style hydrating toner with hyaluronic acid and ceramides for deeply nourished skin.',
      image: 'assets/images/toner/toner4.jpg',
      category: 'toner'
    },
    {
      name: 'Green Tea Antioxidant Toner',
      price: 2799,
      description: 'Antioxidant-rich toner with green tea extract that protects skin from environmental damage.',
      image: 'assets/images/Toner.jpg',
      category: 'toner'
    },
  ];

  constructor() {
    this.products = [...this.defaultProducts];
    this.save();
  }

  addProduct(prod: any) {
    prod.price = Number(prod.price);
    this.products.push(prod);
    this.products = [...this.products];
    this.save();
  }

  getProducts() {
    return this.products;
  }

  // Category ke mutabiq filter
  getProductsByCategory(category: string): any[] {
    if (!category) return this.products;
    return this.products.filter(p => p.category === category);
  }

  updateProduct(index: number, updatedProduct: any) {
    updatedProduct.price = Number(updatedProduct.price);
    this.products[index] = updatedProduct;
    this.products = [...this.products];
    this.save();
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
    this.products = [...this.products];
    this.save();
  }

  save() {
    try {
      localStorage.setItem('products', JSON.stringify(this.products));
    } catch (e) {
      console.warn('localStorage full');
      const slim = this.products.map(p => ({
        ...p,
        image: p.image && p.image.startsWith('data:') && p.image.length > 300000 ? '' : p.image
      }));
      try {
        localStorage.setItem('products', JSON.stringify(slim));
      } catch (e2) {
        console.error('Save failed:', e2);
      }
    }
  }
}