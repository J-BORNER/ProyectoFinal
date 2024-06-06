import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasEditarComponent } from './citas-editar.component';

describe('CitasEditarComponent', () => {
  let component: CitasEditarComponent;
  let fixture: ComponentFixture<CitasEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitasEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
