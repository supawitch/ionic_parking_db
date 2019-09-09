import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingAddPage } from './parking-add.page';

describe('ParkingAddPage', () => {
  let component: ParkingAddPage;
  let fixture: ComponentFixture<ParkingAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
