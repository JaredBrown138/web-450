import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SentinelService {
  private username: string = 'Jared Brown';

  constructor() {}

  public getUsername() {
    return this.username;
  }
}
