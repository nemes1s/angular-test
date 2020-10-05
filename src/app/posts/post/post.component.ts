import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'li[app-post]',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  constructor() { }

  @Input() post: any;

  propsToShow = ['id', 'userId']

  ngOnInit(): void {
  }


  clickPost():void {
    let [a,b] = this.propsToShow
    this.propsToShow = [b,a]
  }

}
