import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, MatInputModule, BrowserAnimationsModule, MatIconModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
