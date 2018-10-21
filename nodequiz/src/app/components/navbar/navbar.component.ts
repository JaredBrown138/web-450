import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../../services/API/api-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string = this.api.name;

  constructor(public api: APIService, public router: Router) { }

  ngOnInit() { }

  logout() {
    this.api.logout();
    this.router.navigateByUrl('/');

  }
}
