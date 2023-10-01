import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapListComponent } from './maplist.component';


describe('MaplistComponent', () => {
  let component: MapListComponent;
  let fixture: ComponentFixture<MapListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapListComponent]
    });
    fixture = TestBed.createComponent(MapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
