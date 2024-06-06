import { TestBed } from '@angular/core/testing';

import { CitasEliminarService } from './citas-eliminar.service';

describe('CitasEliminarService', () => {
  let service: CitasEliminarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitasEliminarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
