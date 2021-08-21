import { TestBed } from '@angular/core/testing';

import { RegistrantsService } from './registrants.service';

describe('RegistrantsService', () => {
  let service: RegistrantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
