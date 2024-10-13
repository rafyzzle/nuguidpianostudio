import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SnowDayPolicyComponent } from './snow-day-policy.component';

describe('SnowDayPolicyComponent', () => {
  let component: SnowDayPolicyComponent;
  let fixture: ComponentFixture<SnowDayPolicyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowDayPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowDayPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
