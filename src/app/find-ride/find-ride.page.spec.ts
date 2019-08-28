import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRidePage } from './find-ride.page';

describe('FindRidePage', () => {
  let component: FindRidePage;
  let fixture: ComponentFixture<FindRidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindRidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
