import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PostsService {
  config = {
    postsUrl: "https://jsonplaceholder.typicode.com/posts"
  };

  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get(this.config.postsUrl);
  }
}