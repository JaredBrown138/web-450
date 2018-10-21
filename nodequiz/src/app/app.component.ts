import { Component } from '@angular/core';
import { APIService } from '../app/services/API/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nodequiz';
  constructor(public api: APIService) {

  }
}
