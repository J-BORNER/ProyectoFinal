import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasCrearComponent } from './citas-crear.component';

describe('CitasCrearComponent', () => {
  let component: CitasCrearComponent;
  let fixture: ComponentFixture<CitasCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitasCrearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitasCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
