import { Component, OnInit } from '@angular/core';
import { SentinelService } from '../../services/Sentinel/sentinel.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string = this.sentinel.getUsername();

  constructor(private sentinel: SentinelService) {}

  ngOnInit() {}
}
