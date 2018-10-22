import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { imports } from '../../services/Util/util.imports';
import { declarations } from '../../services/Util/util.imports';
import { providers } from '../../services/Util/util.imports';

import { UnfinishedQuizGuard } from './unfinished-quiz.guard';
import { QuizComponent } from '../../components/quiz/quiz.component';



describe('LoginGuard', () => {
    let unfinishedQuizGuard: UnfinishedQuizGuard;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [declarations],
            imports: [imports],
            providers: [UnfinishedQuizGuard, providers]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        unfinishedQuizGuard = TestBed.get(UnfinishedQuizGuard);

    });

    it('should create', () => {
        expect(unfinishedQuizGuard).toBeTruthy();
    });

    it('canDeactivate() should allow naviagtion one the quiz is submitted', () => {
        const quizComponent = TestBed.createComponent(QuizComponent);
        let quiz = quizComponent.debugElement.componentInstance;
        quiz.submited = true;
        expect(unfinishedQuizGuard.canDeactivate(quiz)).toBeTruthy();
    });

});  