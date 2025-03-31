import { TestBed } from '@angular/core/testing';

import { UserAnswerServiceService } from './user-answer-service.service';

describe('UserAnswerServiceService', () => {
  let service: UserAnswerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAnswerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
