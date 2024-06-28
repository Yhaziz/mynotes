import { Component } from '@angular/core';
import { PostsService } from '../../../shared/service/posts.service';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { toast, NgxSonnerToaster } from 'ngx-sonner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-posts',
  standalone: true,
  imports: [ReactiveFormsModule,NgxSonnerToaster,CommonModule],
  templateUrl: './add-posts.component.html',
  styleUrl: './add-posts.component.css'
})
export class AddPostsComponent {
  protected readonly toast = toast
  addPost : FormGroup;
  submitted:boolean =false;
  constructor(
    private fb:FormBuilder,
    private router : Router,
    private postsService : PostsService){
      this.addPost = this.fb.group({

      })
    }

    ngOnInit(): void {
      this.buildaddpost();
      
    }

    onSubmit(){
      this.submitted =true;

      if(this.addPost.invalid){
        return;
      }
      
      this.postsService.add(this.addPost.value).subscribe(
        res =>{
          toast.success('Post Add');
          setTimeout(() => {
            this.router.navigate(['/admin/posts']);
          }, 1000);
        },
        err =>{
          this.toast.error('An error occurred', err.message || err);
                console.log(err);
        }

      )
    }

    get f() {return this.addPost.controls;}

    buildaddpost(){
      this.addPost = this.fb.group({
        title: ['', Validators.required],
        sdesc: ['', Validators.required],
        desc: ['', Validators.required]
      });
    }

}
