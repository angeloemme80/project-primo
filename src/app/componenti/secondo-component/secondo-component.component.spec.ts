import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondoComponentComponent } from './secondo-component.component';

describe('SecondoComponentComponent', () => {
  let component: SecondoComponentComponent;
  let fixture: ComponentFixture<SecondoComponentComponent>;

  beforeEach(async(() => {
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
