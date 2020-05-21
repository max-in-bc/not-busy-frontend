import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceListingsComponent } from './place-listings.component';

describe('PlaceListingsComponent', () => {
  let component: PlaceListingsComponent;
  let fixture: ComponentFixture<PlaceListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
