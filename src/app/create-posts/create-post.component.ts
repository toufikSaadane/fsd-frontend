import {Component, OnInit} from '@angular/core';
import {CreatePostService} from "./create.service";
import {Router} from "@angular/router";
import {PostRequestModel} from "../model/post-request.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrl: './create-posts.component.css'
})
export class CreatePostComponent implements OnInit {
  post: PostRequestModel = {
    categoryName: '',
    postName: '',
    url: '',
    description: '',

  };
  categories: string[] = [];

  constructor(private createService: CreatePostService, private router: Router) {
  }

  ngOnInit() {
    console.log('User:', localStorage.getItem('username'));
    console.log("Jwt token: ", localStorage.getItem('authToken'));
    this.loadCategories();
  }

  loadCategories() {
    this.createService.getAllCategories().subscribe(
      (categories) => {
        this.categories = categories.map(cat => cat.name);
      },
      (error) => {
        console.error('Error loading categories', error);
      }
    );
  }

  // console.log('Post:', this.post);
  // console.log('User:', localStorage.getItem('username'));
  // console.log("Jwt token: ", localStorage.getItem('authToken'));
  // this.createService.createPost(this.post).subscribe(
  //   (response: PostRequestModel) => {
  //     console.log('Post created successfully', response);
  //     // Handle success (e.g., show a success message, reset form, navigate to post list)
  //     this.router.navigate(['/posts']);
  //   },
  //   (error) => {
  //     console.error('Error creating post', error);
  //     // Handle error (e.g., show error message to user)
  //   }
  // );

  onSubmit() {
    console.log('Submitting post data:', this.post);
    this.createService.createPost(this.post).subscribe(
      response => {
        console.log('Post created successfully', response);
        this.router.navigate(['/posts']);
      },
      (error: HttpErrorResponse) => {
        console.error('Error creating post:', error);
        console.error('Error details:', error.error);
        console.error('Status:', error.status);
        console.error('Status Text:', error.statusText);
        if (error.error instanceof ErrorEvent) {
          console.error('Client-side error:', error.error.message);
        } else {
          console.error('Server-side error:', error.error);
        }
      }
    );
  }
}

