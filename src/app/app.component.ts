import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { authConfig } from './sso.config';
import { UserService } from '../user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private oauthService:OAuthService,
    private userService: UserService
  ){
    this.configureSingleSignOn();
  }

  configureSingleSignOn(){
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login(){
    if (!this.oauthService.hasValidAccessToken()) {
      this.oauthService.initCodeFlow();
    } 
  }
  
  logout(){
    this.oauthService.logOut();
  }

  get token(){
    let claims:any = this.oauthService.getIdentityClaims();
    this.userService.setClaims(claims);
    return claims ? claims : null;
  }
}