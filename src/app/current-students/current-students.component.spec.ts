import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CurrentStudentsComponent } from './current-students.component';

describe('CurrentStudentsComponent', () => {
  let component: CurrentStudentsComponent;
  let fixture: ComponentFixture<CurrentStudentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
