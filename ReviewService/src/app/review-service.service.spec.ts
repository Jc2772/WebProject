import { TestBed } from '@angular/core/testing';

import { ReviewService } from './review-service.service';

describe('ReviewServiceService', () => {
  let service: ReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
