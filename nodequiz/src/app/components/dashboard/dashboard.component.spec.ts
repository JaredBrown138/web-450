import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { imports } from '../../services/Util/util.imports';
import { declarations } from '../../services/Util/util.imports';
import { providers } from '../../services/Util/util.imports';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, declarations],
      imports: [imports],
      providers: [providers]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('prepareAvg should return 0 if it equals null or 999', () => {
    expect(component.prepareAvg(999)).toEqual(0);

  });


});
