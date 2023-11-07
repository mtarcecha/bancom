import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [UsersService]
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('UsersService getPostsByUser', () => {
    const user = {
      userId: "3",
      title: "test",
      body: "test body"
    }
    service.createPost(user).subscribe((result) => {
      expect(result).toBeTruthy();
    });
    
  });

  it('UsersService getUsers', () => {
    service.getUsers();
    expect(service).toBeTruthy();
  });

  it('UsersService getPostsByUser', () => {
    service.getPostsByUser(4);
    expect(service).toBeTruthy();
  });
});
