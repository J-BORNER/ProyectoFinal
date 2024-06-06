import { TestBed } from '@angular/core/testing';

import { MedicosEliminarService } from './medicos-eliminar.service';

describe('MedicosEliminarService', () => {
  let service: MedicosEliminarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicosEliminarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
