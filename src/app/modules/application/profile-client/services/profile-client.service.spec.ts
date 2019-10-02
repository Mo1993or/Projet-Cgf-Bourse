import { TestBed } from '@angular/core/testing';

import { ProfileClientService } from './profile-client.service';

describe('ProfileClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileClientService = TestBed.get(ProfileClientService);
    expect(service).toBeTruthy();
  });
});
