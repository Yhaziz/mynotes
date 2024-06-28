import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
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
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotesService } from '../../../shared/service/notes.service';
import { toast, NgxSonnerToaster } from 'ngx-sonner';




@Component({
  selector: 'app-notes-show',
  standalone: true,
  imports: [RouterModule,NgxSonnerToaster,CommonModule,BrnDialogTriggerDirective,
    BrnDialogContentDirective,

    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogHeaderComponent,
    HlmDialogFooterComponent,
    HlmDialogTitleDirective,
    HlmDialogDescriptionDirective,

    HlmLabelDirective,
    HlmInputDirective,
    HlmButtonDirective,
    ReactiveFormsModule,
    FormsModule ,
    NgxSonnerToaster,
  ],
  templateUrl: './notes-show.component.html',
  styleUrl: './notes-show.component.css'
})
export class NotesShowComponent implements OnInit {
  
  protected readonly toast = toast;
 @Input() itemId:any;
 addFourm! : FormGroup;
 ItemDetails : any = {};
 @Output ()  items = new EventEmitter<any>();
 
 constructor (private fb:FormBuilder,
  private notesService : NotesService
 ){

 }


 ngOnInit(): void {
  this.buildaddFourm();
  if (this.itemId) {
      this.get(this.itemId);
  }

  
  
}


  buildaddFourm(){
    this.addFourm = this.fb.group({
      id:'',
      title: [null, Validators.required],
      desc: [null, Validators.required]
    });
  }

  get(id:any){
    this.notesService.get(id).subscribe(res =>{
      this.ItemDetails = res;
      this.addFourm.patchValue({
        title:res.title,
        desc : res.desc
      });
    });
  }

  onsubmit(id : any){
    if (id === ''){
      this.add(this.addFourm.value);
    }else{
      this.edit(this.addFourm.value,id)
    }
  }

  add(data:any){
    this.notesService.add(data).subscribe(
      
      res => {
        toast.success('Note add successfully');
        this.getItems();
        
      },
      
      erro => {
        this.toast.error('An error occurred', erro.message || erro);
      }
    )
    
    
  }


  edit(data:any , id:any){
    this.notesService.edit(data,id).subscribe(
      res => {
        toast.success('Note updated successfully');
        this.getItems();
      },
      erro => {
        this.toast.error('An error occurred', erro.message || erro);
      }
    )
  }

  getItems(){
    this.notesService.getAll().subscribe(res =>{
      this.items.emit(res);
    });
  }


  
}
