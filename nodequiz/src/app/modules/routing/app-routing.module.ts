import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { QuizSelectionComponent } from '../../components/quiz-selection/quiz-selection.component';
import { PresentationComponent } from '../../components/presentation/presentation.component';
import { QuizComponent } from '../../components/quiz/quiz.component';
import { CumulativeGradesComponent } from '../../components/cumulative-grades/cumulative-grades.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'select', component: QuizSelectionComponent },
  { path: 'presentation/:id', component: PresentationComponent },
  { path: 'quiz/:id', component: QuizComponent },
  { path: 'scores', component: CumulativeGradesComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
