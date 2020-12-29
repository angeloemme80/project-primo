import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrimoComponentComponent } from './primo-component.component';

describe('PrimoComponentComponent', () => {
  let component: PrimoComponentComponent;
  let fixture: ComponentFixture<PrimoComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
