import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvoidDistractionsComponent } from './avoid-distractions.component';

describe('AvoidDistractionsComponent', () => {
  let component: AvoidDistractionsComponent;
  let fixture: ComponentFixture<AvoidDistractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvoidDistractionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvoidDistractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
