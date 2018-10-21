import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './modules/routing/login.guard';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from './modules/routing/app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatTableDataSource } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuizSelectionComponent } from './components/quiz-selection/quiz-selection.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { CumulativeGradesComponent } from './components/cumulative-grades/cumulative-grades.component';
import { UnfinishedQuizGuard } from './modules/routing/unfinished-quiz.guard';
import { ColorGradingDirective } from './directives/color-grading.directive';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    QuizSelectionComponent,
    PresentationComponent,
    QuizComponent,
    CumulativeGradesComponent,
    ColorGradingDirective,
    DashboardComponent,

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
    FlexLayoutModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule

  ],
  providers: [UnfinishedQuizGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
