import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABodyComponent } from './a-body.component';

describe('ABodyComponent', () => {
  let component: ABodyComponent;
  let fixture: ComponentFixture<ABodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
