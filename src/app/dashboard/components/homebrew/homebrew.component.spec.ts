import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebrewComponent } from './homebrew.component';

describe('HomebrewComponent', () => {
  let component: HomebrewComponent;
  let fixture: ComponentFixture<HomebrewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomebrewComponent]
    });
    fixture = TestBed.createComponent(HomebrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
