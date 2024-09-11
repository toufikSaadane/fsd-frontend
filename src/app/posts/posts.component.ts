import { Component, OnInit } from '@angular/core';
import { PostsService } from "./posts.service";
import {PostResponse} from "../model/post-response.model";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: PostResponse[] = [];
  isLoading = false;
  error: string | null = null;
  isLoggedIn = false;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.fetchPosts();
    this.checkLoginStatus();
  }

  fetchPosts() {
    this.isLoading = true;
    this.error = null;
    this.postsService.getPosts().subscribe(
      (data) => {
        this.posts = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching posts:', error);
        this.error = 'An error occurred while fetching posts. Please try again later.';
        this.isLoading = false;
      }
    );
  }

  checkLoginStatus() {
    const token = localStorage.getItem('authToken');
    this.isLoggedIn = !!token; // Set to true if token exists, false otherwise
  }
}
