import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuizSelectionComponent } from './components/quiz-selection/quiz-selection.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CumulativeGradesComponent } from './components/cumulative-grades/cumulative-grades.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AppRoutingModule } from './modules/routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';

import { APP_BASE_HREF } from '@angular/common';
import { ColorGradingDirective } from './directives/color-grading.directive';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        BrowserAnimationsModule,
        MatIconModule,
        FormsModule,
        AppRoutingModule,
        FlexLayoutModule,
        MatTooltipModule,
        MatTableModule,
        HttpClientModule,

      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'nodequiz'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('nodequiz');
  }));
});
