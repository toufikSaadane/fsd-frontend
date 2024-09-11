import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {LoginComponent} from "./auth/login/login.component";
import {NewsComponent} from "./news/news.component";
import {PostsComponent} from "./posts/posts.component";
import {CategoryComponent} from "./category/category.component";
import {CreatePostsComponent} from "./create-posts/create-posts.component";
import {CreateCategoryComponent} from "./create-category/create-category.component";

const routes: Routes = [
  {path: 'sign-up', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-news', component: NewsComponent},
  {path : 'posts', component : PostsComponent},
  {path: 'app-create-posts', component: CreatePostsComponent},
  {path: 'app-create-category', component: CreateCategoryComponent},
  {path: 'app-category', component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
