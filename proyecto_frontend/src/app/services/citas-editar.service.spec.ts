import { TestBed } from '@angular/core/testing';

import { CitasEditarService } from './citas-editar.service';

describe('CitasEditarService', () => {
  let service: CitasEditarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitasEditarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
