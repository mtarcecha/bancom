import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlBackend = environment.urlBackend;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.urlBackend}/users/`);
  }

  getPostsByUser(id: number) {
    return this.http.get(`${this.urlBackend}/users/${id}/posts`);
  }

  createPost(post: any) {
    return this.http.post(`${this.urlBackend}/posts`, post);
  }
}
