import { CanDeactivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { APIService } from "../../services/API/api-service.service";
import { QuizComponent } from '../../components/quiz/quiz.component';

@Injectable()
export class UnfinishedQuizGuard implements CanDeactivate<QuizComponent> {

    constructor(public api: APIService) { }

    /**
     * Will make sure that users wish to leave the quiz page,
     * notifying them of how many questions they have left. Of
     * course if they have already submitted the quiz they can 
     * leave whenever.
     *
     * @param {QuizComponent} component
     * @returns
     * @memberof UnfinishedQuizGuard
     */
    canDeactivate(component: QuizComponent) {
        if (!component.submited) {
            return window.confirm("Are you sure you want to leave? You have " + (10 - component.questionsCompleted) + " questions left.");
        }
        return true;
    }
}