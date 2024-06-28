import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { EditPostsComponent } from './edit-posts/edit-posts.component';
import { ShowPostsComponent } from './show-posts/show-posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostsRoutingModule,
    AddPostsComponent,
    EditPostsComponent,
    ShowPostsComponent,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class PostsModule { }
