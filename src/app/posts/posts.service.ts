import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PostsService {
  config = {
    postsUrl: "https://jsonplaceholder.typicode.com/posts"
  };

  private propsToShow = ['id', 'userId']
  private initialPosts: any[] = [];
  private postsTracker = new BehaviorSubject<any[]>(this.initialPosts);

  constructor(private http: HttpClient) {
  }

  getPosts() {
    if(this.postsTracker.getValue().length === 0)
      this.http.get(this.config.postsUrl).subscribe((data: any[]) => {
          this.postsTracker.next(data.map(i => {
              i.propToShow = this.propsToShow[0]
              return i
          }))
      })
      return this.postsTracker.asObservable();
  }


  flipPost(post) {
    const posts = this.postsTracker.getValue().map(i => {
        if(i.id === post.id)
            i.propToShow = i.propToShow == this.propsToShow[0] ? this.propsToShow[1] : this.propsToShow[0];

        return i;
    })
    this.postsTracker.next(posts)
  }
}