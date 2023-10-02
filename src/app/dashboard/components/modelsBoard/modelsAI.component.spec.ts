import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsAIComponent } from './modelsai.component';

describe('ModelsAIComponent', () => {
  let component: ModelsAIComponent;
  let fixture: ComponentFixture<ModelsAIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelsAIComponent]
    });
    fixture = TestBed.createComponent(ModelsAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
