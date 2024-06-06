import { TestBed } from '@angular/core/testing';

import { PacientesEditarService } from './pacientes-editar.service';

describe('PacientesEditarService', () => {
  let service: PacientesEditarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacientesEditarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
