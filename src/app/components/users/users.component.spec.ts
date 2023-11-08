import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersComponent } from './users.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { UsersService } from 'src/app/services/users/users.service';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginService } from 'src/app/services/login/login.service';

const usersServiceStub: UsersService = jasmine.createSpyObj(UsersService, {
  getUsers: of([
    {
        id: "1",
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
        },
        phone: "1-770-736-8031 x56442"
    }]),
  getPostsByUser: of([
    {
        userId: "2",
        id: "11",
        title: "et ea vero quia laudantium autem",
        body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    }])
});

const loginServiceStub: LoginService = jasmine.createSpyObj(LoginService, {
  closeSession: () => {},
  verifySession: () => {}
});

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule, MatDialogModule, MatTableModule, BrowserAnimationsModule],
      providers: [
        {
          provide: UsersService,
          useValue: usersServiceStub,
        },
        {
          provide: LoginService,
          useValue: loginServiceStub,
        },
      ]
    });
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('UsersComponent getUsers', () => {
    const usersService = TestBed.inject(UsersService);
    component.getUsers()
    expect(usersService.getUsers).toHaveBeenCalled();
  });

  it('UsersComponent getPostsByUser', () => {
    const usersService = TestBed.inject(UsersService);
    component.getPost(1)
    expect(usersService.getPostsByUser).toHaveBeenCalled();
  });

  it('UsersComponent openCreatePost', () => {
    const usersService = TestBed.inject(UsersService);
    component.openCreatePost(1)
    expect(component.dialogRef).toBeTruthy();
  });

  it('UsersComponent showResult', () => {
    component.openCreatePost(1)
    component.showResult(true)
    expect(component).toBeTruthy();
  });

  it('UsersComponent closeSession', () => {
    const usersService = TestBed.inject(LoginService);
    component.closeSession()
    expect(usersService.closeSession).toHaveBeenCalled();
  });

});
