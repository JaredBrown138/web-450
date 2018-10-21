import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { QuizSelectionComponent } from '../../components/quiz-selection/quiz-selection.component';
import { PresentationComponent } from '../../components/presentation/presentation.component';
import { QuizComponent } from '../../components/quiz/quiz.component';
import { CumulativeGradesComponent } from '../../components/cumulative-grades/cumulative-grades.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { LoginGuard } from "./login.guard";
import { UnfinishedQuizGuard } from './unfinished-quiz.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'select', component: QuizSelectionComponent, canActivate: [LoginGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard] },
  { path: 'presentation/:id', component: PresentationComponent, canActivate: [LoginGuard] },
  { path: 'quiz/:id', component: QuizComponent, canActivate: [LoginGuard], canDeactivate: [UnfinishedQuizGuard] },
  { path: 'scores', component: CumulativeGradesComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
