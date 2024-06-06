import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesEliminarComponent } from './pacientes-eliminar.component';

describe('PacientesEliminarComponent', () => {
  let component: PacientesEliminarComponent;
  let fixture: ComponentFixture<PacientesEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacientesEliminarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PacientesEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
