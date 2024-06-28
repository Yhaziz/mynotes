import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostsListComponent } from '../../../../views/posts/posts-list/posts-list.component';
import { NotesListComponent } from '../../../../views/notes/notes-list/notes-list.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterModule,PostsListComponent,NotesListComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
