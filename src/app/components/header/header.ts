import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  firstName: string;
  email: string;
}

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  user: User | null = null;
  showDropdown = false;
  isAdmin = false;

  constructor(private router: Router) {}

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        this.user = JSON.parse(storedUser);


        this.isAdmin = this.user?.email === 'lashatinikashvili29@gmail.com';
      }
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  logout() {
    localStorage.removeItem('user');
    this.user = null;
    this.router.navigate(['/login']);
  }

  toggleDropdown(open: boolean) {
    this.showDropdown = open;
  }
}
