import { TestBed } from '@angular/core/testing';

import { MedicosCrearService } from './medicos-crear.service';

describe('MedicosCrearService', () => {
  let service: MedicosCrearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicosCrearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
