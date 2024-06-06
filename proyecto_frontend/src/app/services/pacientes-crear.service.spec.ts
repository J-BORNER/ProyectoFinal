import { TestBed } from '@angular/core/testing';

import { PacientesCrearService } from './pacientes-crear.service';

describe('PacientesCrearService', () => {
  let service: PacientesCrearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacientesCrearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
