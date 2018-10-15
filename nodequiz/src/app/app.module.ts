import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { AppRoutingModule } from './modules/routing/app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuizSelectionComponent } from './components/quiz-selection/quiz-selection.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { CumulativeGradesComponent } from './components/cumulative-grades/cumulative-grades.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    QuizSelectionComponent,
    PresentationComponent,
    QuizComponent,
    CumulativeGradesComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
