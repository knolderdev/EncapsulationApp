import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowDomEncapusaltionComponent } from './shadow-dom-encapusaltion.component';

describe('ShadowDomEncapusaltionComponent', () => {
  let component: ShadowDomEncapusaltionComponent;
  let fixture: ComponentFixture<ShadowDomEncapusaltionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowDomEncapusaltionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowDomEncapusaltionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
