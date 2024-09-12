import {Component, OnInit} from '@angular/core';
import {CreatePostService} from "./create.service";
import {Router} from "@angular/router";
import {PostRequestModel} from "../model/post-request.model";

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
    description: ''
  };
  categories: string[] = [];

  constructor(private createService: CreatePostService, private router: Router) { }

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

  onSubmit() {
    this.createService.createPost(this.post).subscribe(
      (response: PostRequestModel) => {
        console.log('Post created successfully', response);
        // Handle success (e.g., show a success message, reset form, navigate to post list)
        this.router.navigate(['/posts']);
      },
      (error) => {
        console.error('Error creating post', error);
        // Handle error (e.g., show error message to user)
      }
    );
    this.router.navigate(['/posts']);
  }
}
