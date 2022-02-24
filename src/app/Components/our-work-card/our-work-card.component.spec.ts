import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorkCardComponent } from './our-work-card.component';

describe('OurWorkCardComponent', () => {
  let component: OurWorkCardComponent;
  let fixture: ComponentFixture<OurWorkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurWorkCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWorkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
