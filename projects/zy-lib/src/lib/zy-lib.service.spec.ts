import { TestBed } from '@angular/core/testing';

import { ZyLibService } from './zy-lib.service';

describe('ZyLibService', () => {
  let service: ZyLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZyLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
