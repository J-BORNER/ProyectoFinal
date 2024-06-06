import { TestBed } from '@angular/core/testing';

import { PacientesEliminarService } from './pacientes-eliminar.service';

describe('PacientesEliminarService', () => {
  let service: PacientesEliminarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacientesEliminarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
