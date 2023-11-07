import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/user.model';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlBackend = environment.urlBackend;

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(`${this.urlBackend}/users/`);
  }

  getPostsByUser(id: number) {
    return this.http.get<Post[]>(`${this.urlBackend}/users/${id}/posts`);
  }

  createPost(post: Post) {
    return this.http.post<Post>(`${this.urlBackend}/posts`, post);
  }
}
