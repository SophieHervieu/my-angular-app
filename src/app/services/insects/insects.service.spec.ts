import { TestBed } from '@angular/core/testing';

import { InsectsService } from './insects.service';

describe('InsectsService', () => {
  let service: InsectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
