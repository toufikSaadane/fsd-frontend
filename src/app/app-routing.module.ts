import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {LoginComponent} from "./auth/login/login.component";
import {NewsComponent} from "./news/news.component";
import {PostsComponent} from "./posts/posts.component";
import {CategoryComponent} from "./category/category.component";
import {CreatePostComponent} from "./create-posts/create-post.component";
import {CreateCategoryComponent} from "./create-category/create-category.component";
import {LogoutComponent} from "./auth/logout/logout.component";

const routes: Routes = [
  {path: 'sign-up', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: NewsComponent},
  {path : 'posts', component : PostsComponent},
  {path: 'app-create-posts', component: CreatePostComponent},
  {path: 'app-create-category', component: CreateCategoryComponent},
  {path: 'app-category', component: CategoryComponent },
  {path:'app-logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
