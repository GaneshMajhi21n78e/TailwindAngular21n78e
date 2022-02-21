import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudiesPageComponent } from './casestudies-page.component';

describe('CasestudiesPageComponent', () => {
  let component: CasestudiesPageComponent;
  let fixture: ComponentFixture<CasestudiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasestudiesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasestudiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
