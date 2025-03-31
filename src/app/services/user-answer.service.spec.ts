import { TestBed } from '@angular/core/testing';

import { UserAnswerService } from './user-answer.service';

describe('UserAnswerService', () => {
  let service: UserAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
