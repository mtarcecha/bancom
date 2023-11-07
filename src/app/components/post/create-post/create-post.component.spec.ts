import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePostComponent } from './create-post.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';
import { of } from 'rxjs';

const data  = { userId: 2 }


describe('CreatePostComponent', () => {
  let component: CreatePostComponent;
  let fixture: ComponentFixture<CreatePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePostComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: data
        },
      ]
    });
    fixture = TestBed.createComponent(CreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('CreatePostComponent savedPost', () => {
    const apiService = TestBed.inject(UsersService);
    spyOn(apiService, 'createPost').and.returnValue(of({userId: "2", title: "", body: "", id: "3"}));
    component.savedPost();
    expect(apiService.createPost).toHaveBeenCalled();
  });

  it('CreatePostComponent savedPost error', () => {
    const apiService = TestBed.inject(UsersService);
    spyOn(apiService, 'createPost').and.returnValue(of({userId: "2", title: "", body: ""}));
    component.savedPost();
    expect(apiService.createPost).toHaveBeenCalled();
  });
});
