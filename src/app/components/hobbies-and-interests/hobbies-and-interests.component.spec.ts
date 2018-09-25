import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesAndInterestsComponent } from './hobbies-and-interests.component';

describe('HobbiesAndInterestsComponent', () => {
  let component: HobbiesAndInterestsComponent;
  let fixture: ComponentFixture<HobbiesAndInterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbiesAndInterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesAndInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
