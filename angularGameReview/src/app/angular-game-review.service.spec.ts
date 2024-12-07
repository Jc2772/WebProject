import { TestBed } from '@angular/core/testing';

import { AngularGameReviewService } from './angular-game-review.service';

describe('AngularGameReviewService', () => {
  let service: AngularGameReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularGameReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
