import { TestBed } from '@angular/core/testing';

import { ListingMatchesService } from './listing-matches.service';

describe('ListingMatchesService', () => {
  let service: ListingMatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListingMatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
