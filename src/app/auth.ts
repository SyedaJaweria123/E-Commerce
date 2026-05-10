import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private USERS_KEY     = 'beauty_users';
  private LOGGED_IN_KEY = 'beauty_loggedin_user';

  // ══════════════════════════════════════════════════════
  // BehaviorSubject — yeh ek "live channel" hai
  // Jab bhi login/logout hoga, yeh sab subscribers ko
  // automatically nayi value bhejega.
  // Navbar isko subscribe karta hai — isliye turant update hoga.
  // ══════════════════════════════════════════════════════
  private currentUserSubject = new BehaviorSubject<any>(this.getSavedUser());

  // Public observable — navbar aur koi bhi component subscribe kar sakta hai
  currentUser$ = this.currentUserSubject.asObservable();

  // Abhi ka user directly lene ke liye (sync)
  get currentUser(): any {
    return this.currentUserSubject.value;
  }

  // ── PRIVATE: localStorage se user uthao ──
  private getSavedUser(): any {
    try {
      const data = localStorage.getItem(this.LOGGED_IN_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  // ── SIGNUP ──
  signup(name: string, email: string, password: string): { success: boolean; message: string } {
    const users  = this.getUsers();
    const exists = users.find((u: any) => u.email === email);
    if (exists) return { success: false, message: 'Email already registered!' };

    const newUser = {
      id: Date.now(), name, email, password,
      role: 'user',
      createdAt: new Date().toISOString()
    };
    users.push(newUser);
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    return { success: true, message: 'Account created successfully!' };
  }

  // ── LOGIN ──
  login(email: string, password: string): { success: boolean; message: string } {
    const users = this.getUsers();
    const user  = users.find((u: any) => u.email === email && u.password === password);
    if (!user) return { success: false, message: 'Invalid email or password!' };

    const { password: _, ...safeUser } = user;

    // localStorage mein save karo
    localStorage.setItem(this.LOGGED_IN_KEY, JSON.stringify(safeUser));

    // ✅ BehaviorSubject ko new user emit karo — navbar instantly update hoga
    this.currentUserSubject.next(safeUser);

    return { success: true, message: 'Login successful!' };
  }

  // ── LOGOUT ──
  logout(): void {
    localStorage.removeItem(this.LOGGED_IN_KEY);

    // ✅ BehaviorSubject ko null emit karo — navbar instantly Login button dikhayega
    this.currentUserSubject.next(null);
  }

  // ── CURRENT USER (legacy support) ──
  getCurrentUser(): any {
    return this.currentUserSubject.value;
  }

  // ── IS LOGGED IN ──
  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  // ── IS ADMIN ──
  isAdmin(): boolean {
    return this.currentUserSubject.value?.role === 'admin';
  }

  // ── GET ALL USERS ──
  getUsers(): any[] {
    try {
      return JSON.parse(localStorage.getItem(this.USERS_KEY) || '[]');
    } catch {
      return [];
    }
  }

  // ── DELETE USER ──
  deleteUser(id: number): void {
    const users = this.getUsers().filter((u: any) => u.id !== id);
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  }

  // ── ADMIN INITIALIZE ──
  initAdmin(): void {
    const users      = this.getUsers();
    const adminExist = users.find((u: any) => u.role === 'admin');
    if (!adminExist) {
      users.push({
        id: 1, name: 'Admin',
        email: 'admin@beauty.com',
        password: 'admin123',
        role: 'admin',
        createdAt: new Date().toISOString()
      });
      localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    }
  }
}