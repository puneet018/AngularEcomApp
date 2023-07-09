import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecom-app-fe';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showShopKeeperBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log(this.tokenStorageService.getToken()+'app.compo -this.tokenStorageService.getToken()')
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showShopKeeperBoard = this.roles.includes('ROLE_SHOPKEEPER');

      this.username = user.username;
    }
  }


}
