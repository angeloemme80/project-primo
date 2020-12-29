import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SecondoComponentComponent } from './secondo-component.component';

describe('SecondoComponentComponent', () => {
  let component: SecondoComponentComponent;
  let fixture: ComponentFixture<SecondoComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
