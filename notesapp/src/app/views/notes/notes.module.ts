import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotesShowComponent } from './notes-show/notes-show.component';
import { NgSearchFilterModule } from 'ng-search-filter';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NotesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NotesShowComponent,
    NgSearchFilterModule
  ]
})
export class NotesModule { }
