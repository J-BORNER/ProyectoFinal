import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosEliminarComponent } from './medicos-eliminar.component';

describe('MedicosEliminarComponent', () => {
  let component: MedicosEliminarComponent;
  let fixture: ComponentFixture<MedicosEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicosEliminarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicosEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
