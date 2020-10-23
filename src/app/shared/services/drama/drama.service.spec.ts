import { TestBed } from '@angular/core/testing';

import { DramaService } from './drama.service';

describe('DramaService', () => {
  let service: DramaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DramaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
