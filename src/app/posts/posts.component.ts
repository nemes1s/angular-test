import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass'],
  providers: [PostsService]
})
export class PostsComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  posts: any[]

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    })
  }

}
