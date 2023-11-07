import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';

const loginServiceStub: LoginService = jasmine.createSpyObj(LoginService, {
  validateUser: true,
  setSession: () => {}
});

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule],
      providers: [{
        provide: LoginService,
        useValue: loginServiceStub,
      }]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('LoginComponent error message email', () => {
    component.loginForm.get("email")?.setValue("admin@admin.com");
    const message = component.getErrorMessageEmail();
    expect(message).toEqual('');
  });

  it('LoginComponent error message ', () => {
    component.loginForm.get("password")?.setValue("admin");
    const message = component.getErrorMessagePassword();
    expect(message).toEqual('');
  });

  it('LoginComponent login', () => {
    const apiService = TestBed.inject(LoginService);
    component.login();
    expect(apiService.validateUser).toHaveBeenCalled();
  });
});
