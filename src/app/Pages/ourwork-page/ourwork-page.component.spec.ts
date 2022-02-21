import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurworkPageComponent } from './ourwork-page.component';

describe('OurworkPageComponent', () => {
  let component: OurworkPageComponent;
  let fixture: ComponentFixture<OurworkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurworkPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurworkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
