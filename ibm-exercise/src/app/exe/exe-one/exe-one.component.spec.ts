import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeOneComponent } from './exe-one.component';

describe('ExeOneComponent', () => {
  let component: ExeOneComponent;
  let fixture: ComponentFixture<ExeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
