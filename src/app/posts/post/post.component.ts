import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'li[app-post]',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
  providers: [PostsService],
})
export class PostComponent implements OnInit {

  constructor() { }

  @Input() post: any;

  ngOnInit(): void {
  }

}
