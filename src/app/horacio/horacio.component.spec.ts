import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HoracioComponent } from './horacio.component';

describe('HoracioComponent', () => {
  let component: HoracioComponent;
  let fixture: ComponentFixture<HoracioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HoracioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoracioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
