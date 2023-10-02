import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsPredComponent } from './modelspred.component';

describe('ModelsPredComponent', () => {
  let component: ModelsPredComponent;
  let fixture: ComponentFixture<ModelsPredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelsPredComponent]
    });
    fixture = TestBed.createComponent(ModelsPredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
