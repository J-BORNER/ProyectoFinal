import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasEliminarComponent } from './citas-eliminar.component';

describe('CitasEliminarComponent', () => {
  let component: CitasEliminarComponent;
  let fixture: ComponentFixture<CitasEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitasEliminarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitasEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
