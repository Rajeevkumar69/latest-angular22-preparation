import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Post } from '../interfaces/common.interface';

@Service()
export class UsersDataService {
     private http = inject(HttpClient);

     protected apiUrl: string = 'https://jsonplaceholder.typicode.com/posts';

     // GET Request
     public getPosts() {
          return this.http.get<Post>(`${this.apiUrl}?_limit=15`);
     }

     // POST Request
     public addPost(payload: Omit<Post, 'id'>) {
          return this.http.post<Post>(this.apiUrl, payload);
     }

     // PUT Request
     public updatePost(id: number, payload: Post) {
          return this.http.put<Post>(`${this.apiUrl}/${id}`, payload);
     }

     // DELETE Request
     public deletePost(id: number) {
          return this.http.delete<Post>(`${this.apiUrl}/${id}`);
     }
}