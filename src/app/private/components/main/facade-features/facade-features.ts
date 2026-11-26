import { Component, inject, OnInit } from '@angular/core';
import { UserFacade } from '../../../shared/facades/user.facade';
import { CommonModule } from '@angular/common';

@Component({
     imports: [CommonModule],
     selector: 'app-facade-features',
     styleUrl: './facade-features.scss',
     templateUrl: './facade-features.html'
})
export class FacadeFeatures implements OnInit {
     private userFacade = inject(UserFacade);

     ngOnInit(): void {
          this.getAllPost();
     }

     public getAllPost() {
          this.userFacade.getPosts().subscribe({
               next: ((res: any) => {
                    console.log(res);
               }),
               error: ((err: any) => {
                    console.log(err);
               })
          })
     }
}