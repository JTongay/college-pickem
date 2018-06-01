import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { matchupsResponseMock } from './mocks/responses';

import { PicksService } from './picks.service';

describe('PicksService', () => {
  let service: PicksService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PicksService],
      imports: [HttpClientTestingModule]
    });
    // inject the service
    service = TestBed.get(PicksService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should exist', inject([PicksService], (picksService: PicksService) => {
    expect(picksService).toBeTruthy();
  }));

  it('should getMatchups data successfully', () => {
    service.getMatchups('1').subscribe((data: any) => {
      expect(data.match[0].home_team.team_name).toBe('Cowboys');
      expect(data.match[0].away_team.team_name).toBe('Redskins');
      expect(data.match[0].location).toBe('Jerry World');
    });
    const req: TestRequest = httpMock.expectOne(`http://localhost:3000/api/season/1/matchup`, 'call to api');
    expect(req.request.method).toBe('GET');

    req.flush(matchupsResponseMock);
    httpMock.verify();
  });
});
