import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass'],
  providers: [PostsService]
})
export class PostsComponent implements OnInit, OnDestroy {

  constructor(private postsService: PostsService) {

  }
  
  private subscription: Subscription;
  posts: any[]

  ngOnInit(): void {
    this.subscription = this.postsService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    }, err =>{console.log(err)})
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  clickPost(post) {
    this.postsService.flipPost(post)
  }

}
