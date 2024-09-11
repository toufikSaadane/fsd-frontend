import {Component, OnInit} from '@angular/core';
import {CategoryRequestModel} from "../model/category-request.model";
import {CreateCategoryService} from "./create.service";
import {CreateService} from "../create-posts/create.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent implements OnInit {
  categoryDto: CategoryRequestModel = {
    name: '',
    description: '',
    createdDate: new Date(),
    user: ''
  };

  constructor(private createService: CreateCategoryService, private router: Router) { }

  ngOnInit() {
    console.log('User:', localStorage.getItem('username'));
    console.log("Jwt token: ", localStorage.getItem('authToken'));
    console.log('createdDate:', this.categoryDto.createdDate.toLocaleString());
    this.categoryDto.user = localStorage.getItem('username') || '';
  }

  onSubmit() {
    this.categoryDto.createdDate = new Date(); // Set to current date/time
    this.createService.createCategory(this.categoryDto).subscribe(
      (response: CategoryRequestModel) => {
        console.log('Category created successfully', response);
        // Handle success (e.g., show a success message, reset form, navigate to category list)
      },
      (error) => {
        console.error('Error creating category', error);
        // Handle error (e.g., show error message to user)
      }
    );
    this.router.navigate(['/posts']);
  }
}
