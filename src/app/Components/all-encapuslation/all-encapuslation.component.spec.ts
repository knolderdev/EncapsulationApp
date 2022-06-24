import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEncapuslationComponent } from './all-encapuslation.component';

describe('AllEncapuslationComponent', () => {
  let component: AllEncapuslationComponent;
  let fixture: ComponentFixture<AllEncapuslationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEncapuslationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEncapuslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
