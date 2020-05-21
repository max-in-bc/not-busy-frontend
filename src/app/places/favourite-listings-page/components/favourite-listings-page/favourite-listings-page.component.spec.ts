import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteListingsPageComponent } from './favourite-listings-page.component';

describe('FavouriteListingsPageComponent', () => {
  let component: FavouriteListingsPageComponent;
  let fixture: ComponentFixture<FavouriteListingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteListingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteListingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
