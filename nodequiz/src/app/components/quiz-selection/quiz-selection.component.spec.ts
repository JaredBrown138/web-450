import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { imports } from '../../services/Util/util.imports';
import { declarations } from '../../services/Util/util.imports';
import { providers } from '../../services/Util/util.imports';

import { QuizSelectionComponent } from './quiz-selection.component';

describe('QuizSelectionComponent', () => {
  let component: QuizSelectionComponent;
  let fixture: ComponentFixture<QuizSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuizSelectionComponent, declarations],
      imports: [imports],
      providers: [providers]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
