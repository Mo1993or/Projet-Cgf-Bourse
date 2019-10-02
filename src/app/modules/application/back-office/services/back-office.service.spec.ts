import { TestBed } from '@angular/core/testing';

import { BackOfficeService } from './back-office.service';

describe('BackOfficeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackOfficeService = TestBed.get(BackOfficeService);
    expect(service).toBeTruthy();
  });
});
