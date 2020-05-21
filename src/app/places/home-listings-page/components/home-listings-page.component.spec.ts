import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListingsPageComponent } from './home-listings-page.component';

describe('HomeListingsPageComponent', () => {
  let component: HomeListingsPageComponent;
  let fixture: ComponentFixture<HomeListingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeListingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeListingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
