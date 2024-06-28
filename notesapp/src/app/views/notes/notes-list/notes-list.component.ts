import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotesService } from '../../../shared/service/notes.service';
import { toast, NgxSonnerToaster } from 'ngx-sonner';
import { CommonModule } from '@angular/common';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/ui-dialog-brain';
import {
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogDescriptionDirective,
  HlmDialogFooterComponent,
  HlmDialogHeaderComponent,
  HlmDialogTitleDirective,
} from '@spartan-ng/ui-dialog-helm';
import { BrnAlertDialogContentDirective, BrnAlertDialogTriggerDirective } from '@spartan-ng/ui-alertdialog-brain';
import {
  HlmAlertDialogActionButtonDirective,
  HlmAlertDialogCancelButtonDirective,
  HlmAlertDialogComponent,
  HlmAlertDialogContentComponent,
  HlmAlertDialogDescriptionDirective,
  HlmAlertDialogFooterComponent,
  HlmAlertDialogHeaderComponent,
  HlmAlertDialogOverlayDirective,
  HlmAlertDialogTitleDirective,
} from '@spartan-ng/ui-alertdialog-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { NotesShowComponent } from '../notes-show/notes-show.component';
import { NgSearchFilterModule } from 'ng-search-filter';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [RouterModule,NgxSonnerToaster,CommonModule,BrnDialogTriggerDirective,
    BrnDialogContentDirective,

    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogHeaderComponent,
    HlmDialogFooterComponent,
    HlmDialogTitleDirective,
    HlmDialogDescriptionDirective,
    FormsModule,
    HlmLabelDirective,
    HlmInputDirective,
    HlmButtonDirective,
    NotesShowComponent,
    BrnAlertDialogContentDirective, BrnAlertDialogTriggerDirective,
    HlmAlertDialogActionButtonDirective,
    HlmAlertDialogCancelButtonDirective,
    HlmAlertDialogComponent,
    HlmAlertDialogContentComponent,
    HlmAlertDialogDescriptionDirective,
    HlmAlertDialogFooterComponent,
    HlmAlertDialogHeaderComponent,
    HlmAlertDialogOverlayDirective,
    HlmAlertDialogTitleDirective,
    NgSearchFilterModule,
   
    ],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent implements OnInit {

  protected readonly toast = toast
  items : any = []
  addnotes: any;
  itemId : any;

  ngOnInit() {
      this.getAll()
  }

    constructor(private NotesService : NotesService){

}
      getAll(){
        this.NotesService.getAll().subscribe(res =>{
          this.items=res})      }


          deleteItem(id: number) {
            this.NotesService.delete(id).subscribe(
              (res) => {
                toast.success('Note Deleted');
                this.getAll()
              },
              (err) => {
                this.toast.error('An error occurred', err.message || err);
                console.log(err);
              }
            );
          }
          
          // add or edit notes
          open(id:any){
            this.itemId = id;
           console.log(id)
           return false
          }


          
          getUpdate(updateitems : any){
            this.items = updateitems;
         
          }

          
}
