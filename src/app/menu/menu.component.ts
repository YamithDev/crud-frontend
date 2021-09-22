import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  isLogged: boolean = false;

  constructor(private tokenService: TokenService, private router: Router) {}

  ngOnInit(): void {
    this.tokenService.isLogged()
      ? (this.isLogged = true)
      : (this.isLogged = false);
  }

  logOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['/login']);
  }
}
