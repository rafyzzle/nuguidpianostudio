import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RosannaCalendarComponent } from './rosanna-calendar.component';

describe('RosannaCalendarComponent', () => {
  let component: RosannaCalendarComponent;
  let fixture: ComponentFixture<RosannaCalendarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RosannaCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosannaCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
