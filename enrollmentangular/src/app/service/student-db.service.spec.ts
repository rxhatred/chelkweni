import { TestBed } from '@angular/core/testing';

import { StudentDbService } from './student-db.service';

describe('StudentDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentDbService = TestBed.get(StudentDbService);
    expect(service).toBeTruthy();
  });
});
