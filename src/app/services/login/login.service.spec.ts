import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Router,
          useValue: {
            navigateByUrl : () => {},
          },
        },
      ]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('LoginService validateUser OK', () => {

    const user = { email: "demo@demo.com" , password: "demo"}
    const result = service.validateUser(user)
    expect(result).toBeTrue();
  });

  it('LoginService validateUser KO', () => {

    const user = { email: "tets@tets.com" , password: "test"}
    const result = service.validateUser(user)
    expect(result).toBeFalse();
  });

  it('LoginService setSession', () => {
    const user = { email: "tets@tets.com" , password: "test"}
    service.setSession(user)
    expect(service).toBeTruthy();
  });

  it('LoginService closeSession', () => {
    service.closeSession()
    expect(service).toBeTruthy();
  });

  it('LoginService closeSession', () => {
    service.verifySession()
    expect(service.interval).toBeTruthy();
  });
});
