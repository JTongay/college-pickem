import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, TestRequest, HttpTestingController } from '@angular/common/http/testing';

import { ScoringService } from './scoring.service';
import {getLeaderBoardResponseMock} from './mocks/responses';

describe('ScoringService', () => {
  let service: ScoringService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoringService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(ScoringService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should exist', inject([ScoringService], (scoringService: ScoringService) => {
    expect(scoringService).toBeTruthy();
  }));

  it('should getLeaderboard of a given season', () => {
    service.getLeaderBoard(1, 1).subscribe((data: any) => {
      expect(data).toBeDefined();
      expect(data[0].first_name).toBe('Joey');
    });
    const req: TestRequest = httpMock.expectOne(`http://localhost:3000/api/season/1/score/1/leaderboard`, 'call to api');
    req.flush(getLeaderBoardResponseMock);
    expect(req.request.method).toBe('GET');
    httpMock.verify();
  });
});
