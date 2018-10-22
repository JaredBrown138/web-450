import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { imports } from '../../services/Util/util.imports';
import { declarations } from '../../services/Util/util.imports';
import { providers } from '../../services/Util/util.imports';

import { PresentationComponent } from './presentation.component';

describe('PresentationComponent', () => {
  let component: PresentationComponent;
  let fixture: ComponentFixture<PresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PresentationComponent, declarations],
      imports: [imports],
      providers: [providers]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('advance() should not advance past the length of the resource', () => {
    component.presentationObject = {
      title: 'Express/NodeJS',
      slideLen: '102',
      path: 'assets/presentations/Express/Slide',
      id: 'A001'
    }
    component.currentSlide = 102;
    component.advance();
    expect(component.currentSlide).toEqual(102);
  });
  it('regress() should not regress past 1', () => {
    component.presentationObject = {
      title: 'Express/NodeJS',
      slideLen: '102',
      path: 'assets/presentations/Express/Slide',
      id: 'A001'
    }
    component.currentSlide = 1;
    component.regress();
    expect(component.currentSlide).toEqual(1);
  });
});
