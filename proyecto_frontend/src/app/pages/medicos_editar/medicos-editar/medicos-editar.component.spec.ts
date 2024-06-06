import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosEditarComponent } from './medicos-editar.component';

describe('MedicosEditarComponent', () => {
  let component: MedicosEditarComponent;
  let fixture: ComponentFixture<MedicosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicosEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
