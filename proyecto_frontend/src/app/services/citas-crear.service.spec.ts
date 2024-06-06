import { TestBed } from '@angular/core/testing';

import { CitasCrearService } from './citas-crear.service';

describe('CitasCrearService', () => {
  let service: CitasCrearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitasCrearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
