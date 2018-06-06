import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeTwoComponent } from './exe-two.component';

describe('ExeTwoComponent', () => {
  let component: ExeTwoComponent;
  let fixture: ComponentFixture<ExeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
