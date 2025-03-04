import { TestBed } from '@angular/core/testing';

import { BackendKategorienService } from './backend-kategorien.service';

describe('BackendKategorienService', () => {
  let service: BackendKategorienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendKategorienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
