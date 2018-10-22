/** 
 * This file practically imports everything 
 * you would ever need to import. This is used 
 * in the spec.ts unit test files to import everything
 * into the unit tests, because I would like to avoid
 * carpal tunnel and breaking my Ctrl, C, and V keys. 
 * 
 * Idea for this came from the only, the only Eduardo Vargas on SO
 * https://stackoverflow.com/questions/48789289/how-to-reuse-all-imports-in-angular-test-files
 * 
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { AppComponent } from '../../app.component';
import { LoginComponent } from '../../components/login/login.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { QuizSelectionComponent } from '../../components/quiz-selection/quiz-selection.component';
import { PresentationComponent } from '../../components/presentation/presentation.component';
import { QuizComponent } from '../../components/quiz/quiz.component';
import { CumulativeGradesComponent } from '../../components/cumulative-grades/cumulative-grades.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';

import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from '../../modules/routing/app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';

import { UnfinishedQuizGuard } from '../../modules/routing/unfinished-quiz.guard';
import { ColorGradingDirective } from '../../directives/color-grading.directive';

export const imports = [
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

]

export const declarations = [
  AppComponent,
  LoginComponent,
  NavbarComponent,
  QuizSelectionComponent,
  PresentationComponent,
  QuizComponent,
  CumulativeGradesComponent,
  ColorGradingDirective,
  DashboardComponent,

]

export const providers = [
  UnfinishedQuizGuard,
  { provide: APP_BASE_HREF, useValue: '/' },

]