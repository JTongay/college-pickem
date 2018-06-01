import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { Auth } from './models/Auth';
import {getUserMockResponse} from './mocks/responses';
import {User} from './models/User';

describe('UserService', () => {
  let httpMock: HttpTestingController;
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should exist', inject([UserService], (userService: UserService) => {
    expect(userService).toBeTruthy();
  }));

  it('should getUser successfully', () => {
    service.getUser(1).subscribe((data: Auth) => {
      expect(data.message).toBe('success');
    });
    const req: TestRequest = httpMock.expectOne('http://localhost:3000/api/users/1', 'getUser call');
    expect(req.request.method).toBe('GET');
    req.flush(getUserMockResponse);
    httpMock.verify();
  });

  it('should createUser successfully', () => {
    const testUser: User = {
      firstName: 'test',
      lastName: 'user',
      userName: 'testUserYo',
      password: 'password',
      email: 'test@user.test'
    };
    service.createUser(testUser).subscribe((data: Auth) => {
      expect(data.message).toBe('success');
      expect(data.response).toBeDefined();
    });
    const req: TestRequest = httpMock.expectOne('http://localhost:3000/api/users/new', 'createUser call');
    expect(req.request.method).toBe('POST');
    req.flush(getUserMockResponse);
    httpMock.verify();
  });
});
