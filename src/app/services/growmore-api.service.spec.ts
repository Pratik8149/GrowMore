import { TestBed } from '@angular/core/testing';

import { GrowmoreApiService } from './growmore-api.service';

describe('GrowmoreApiService', () => {
  let service: GrowmoreApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrowmoreApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
