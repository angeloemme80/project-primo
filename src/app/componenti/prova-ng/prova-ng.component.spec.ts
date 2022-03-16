import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaNGComponent } from './prova-ng.component';

describe('ProvaNGComponent', () => {
  let component: ProvaNGComponent;
  let fixture: ComponentFixture<ProvaNGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvaNGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvaNGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
