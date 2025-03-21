import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private claims: any;

  setClaims(claims: any) {
    this.claims = claims;
  }

  getClaims() {
    return this.claims;
  }
}
