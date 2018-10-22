import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from '../login/login.component';
import { imports } from '../../services/Util/util.imports';
import { declarations } from '../../services/Util/util.imports';
import { providers } from '../../services/Util/util.imports';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, declarations],
      imports: [imports],
      providers: [providers]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checkEmployeeId returns false for invalid Id formats', () => {
    expect(component.checkEmployeeId('dj320f')).toBeFalsy();
  });

  it('UserMessage should indicate a wrong userId for incorrect userIds', () => {
    component.employeeId = "12fd3s3312";
    component.attemptLogin();
    expect(component.userMessage).toEqual("Invalid User ID");
  });


});
