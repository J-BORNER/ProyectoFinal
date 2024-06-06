import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosCrearComponent } from './medicos-crear.component';

describe('MedicosCrearComponent', () => {
  let component: MedicosCrearComponent;
  let fixture: ComponentFixture<MedicosCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicosCrearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicosCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
