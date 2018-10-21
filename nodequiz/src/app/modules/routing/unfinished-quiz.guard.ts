import { CanDeactivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { APIService } from "../../services/API/api-service.service";
import { QuizComponent } from '../../components/quiz/quiz.component';

@Injectable()
export class UnfinishedQuizGuard implements CanDeactivate<QuizComponent> {

    constructor(public api: APIService) { }

    canDeactivate(component: QuizComponent) {
        if (!component.submited) {
            return window.confirm("Are you sure you want to leave? You have " + (10 - component.questionsCompleted) + " left.");
        }
        return true;
    }
}