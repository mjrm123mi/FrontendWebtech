import { TestBed } from '@angular/core/testing';

import { BackendTransaktionsService } from './backend-transaktions.service';

describe('BackendTransaktionsService', () => {
  let service: BackendTransaktionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendTransaktionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
