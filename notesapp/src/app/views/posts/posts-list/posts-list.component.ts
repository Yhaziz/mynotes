import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostsService } from '../../../shared/service/posts.service';
import { CommonModule } from '@angular/common';
import {
  BrnAlertDialogContentDirective,
  BrnAlertDialogTriggerDirective,
} from '@spartan-ng/ui-alertdialog-brain';
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
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { toast, NgxSonnerToaster } from 'ngx-sonner';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [RouterModule,CommonModule,BrnAlertDialogTriggerDirective,
    BrnAlertDialogContentDirective,

    HlmAlertDialogComponent,
    HlmAlertDialogOverlayDirective,
    HlmAlertDialogHeaderComponent,
    HlmAlertDialogFooterComponent,
    HlmAlertDialogTitleDirective,
    HlmAlertDialogDescriptionDirective,
    HlmAlertDialogCancelButtonDirective,
    HlmAlertDialogActionButtonDirective,
    HlmAlertDialogContentComponent,
    HlmButtonDirective,
    NgxSonnerToaster,
  ],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  protected readonly toast = toast
  items : any = []
  
  ngOnInit() {
      this.getAll()
  }

    constructor(private postsService : PostsService){

}
      getAll(){
        this.postsService.getAll().subscribe(res =>{
          this.items=res})      }


          deleteItem(id: number) {
            this.postsService.delete(id).subscribe(
              (res) => {
                toast.success('Post Deleted');
                this.getAll()
              },
              (err) => {
                this.toast.error('An error occurred', err.message || err);
                console.log(err);
              }
            );
          }
          
}


