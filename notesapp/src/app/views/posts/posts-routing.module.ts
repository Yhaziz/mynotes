import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { ShowPostsComponent } from './show-posts/show-posts.component';
import { EditPostsComponent } from './edit-posts/edit-posts.component';


const routes: Routes = [
  {
    path : '',
    component : PostsListComponent
  },
  {
    path : 'add',
    component : AddPostsComponent
  },
  {
    path : 'show/:id',
    component : ShowPostsComponent
  },
  {
    path : 'edit/:id',
    component : EditPostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
