import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CumulativeGradesComponent } from './cumulative-grades.component';
import { imports } from '../../services/Util/util.imports';
import { declarations } from '../../services/Util/util.imports';
import { providers } from '../../services/Util/util.imports';

describe('CumulativeGradesComponent', () => {
  let component: CumulativeGradesComponent;
  let fixture: ComponentFixture<CumulativeGradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CumulativeGradesComponent, declarations],
      imports: [imports],
      providers: [providers]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumulativeGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
