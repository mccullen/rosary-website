import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBodyComponent } from './b-body.component';

describe('BBodyComponent', () => {
  let component: BBodyComponent;
  let fixture: ComponentFixture<BBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
