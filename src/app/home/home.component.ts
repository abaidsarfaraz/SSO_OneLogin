import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  claims: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.claims = this.userService.getClaims();
  }
  
}
