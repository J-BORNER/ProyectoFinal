import { TestBed } from '@angular/core/testing';

import { MedicosEditarService } from './medicos-editar.service';

describe('MedicosEditarService', () => {
  let service: MedicosEditarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicosEditarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
