import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesCrearComponent } from './pacientes-crear.component';

describe('PacientesCrearComponent', () => {
  let component: PacientesCrearComponent;
  let fixture: ComponentFixture<PacientesCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacientesCrearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PacientesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
