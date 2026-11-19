import { Component, inject, OnInit, signal } from '@angular/core';
import { Post } from '../../../shared/interfaces/common.interface';
import { UsersDataService } from '../../../shared/services/users-data.service';

@Component({
     imports: [],
     selector: 'app-users-data',
     styleUrl: './users-data.scss',
     templateUrl: './users-data.html'
})
export class UsersData implements OnInit {
     private userDataService = inject(UsersDataService);

     public users = signal<Post[]>([]);

     ngOnInit(): void {
          this.getUsersData();
     }

     public getUsersData() {
          this.userDataService.getPosts().subscribe({
               next: ((res: any) => {
                    this.users.set(res)
               }),
               error: ((err: any) => {
                    console.log('API Error');
               })
          })
     }

     public createNewPost() {
          const payload = {
               userId: 1,
               title: "My New Post New Post anditiis voluptate",
               body: "Loream Ipsum New Post anditiis voluptate anditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui Created"
          }

          this.userDataService.addPost(payload).subscribe({
               next: ((res: any) => {
                    this.users.update(user => [res, ...user]);
               }),
               error: ((err: any) => {
                    console.log(err?.error);
               })
          })
     }

     public updatePost(post: Post) {
          const payload = {
               ...post,
               title: "New Updated Title"
          }

          this.userDataService.updatePost(post.id, payload).subscribe({
               next: ((res: any) => {
                    this.users.update(posts =>
                         posts.map(item =>
                              item.id === payload.id ? payload : item
                         )
                    )
               }),
               error: ((err: any) => {
                    console.log(err?.error?.message);
               })
          })
     }

     public deletePost(postId: number) {
          this.userDataService.deletePost(postId).subscribe({
               next: ((res: any) => {
                    this.users.update(data => data.filter(item => item.id != postId))
               }),
               error: ((err: any) => {
                    console.log(err?.error?.message);
               })
          })
     }
}