import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../shared/service/posts.service';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { toast, NgxSonnerToaster } from 'ngx-sonner';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-posts',
  standalone: true,
  imports: [ReactiveFormsModule, NgxSonnerToaster, CommonModule],
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.css'] 
})
export class EditPostsComponent implements OnInit {
  protected readonly toast = toast;
  editPost: FormGroup;
  submitted: boolean = false;
  itemId: string | undefined; 
  itemdetails: any = {}; 

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService
  ) {
    this.editPost = this.fb.group({});
  }

  ngOnInit(): void {

    
    this.route.params.subscribe(params => {
      this.itemId = params['id']; 
      this.postsService.get(params['id']).subscribe((res: any) => { 
        this.itemdetails = res;
        this.editPost.patchValue({
          title:res.title,
          sdesc :res.sdesc,
          desc : res.desc
        });
      });
    });

    this.buildeditPost(); 
  }

  onSubmit(){
    this.submitted =true;

    if(this.editPost.invalid){
      return;
    }
    
    this.postsService.edit(this.editPost.value, this.itemId).subscribe(
      res =>{
        toast.success('Post Edited');
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

  get f() {
    return this.editPost.controls;
  }

  buildeditPost(): void {
    this.editPost = this.fb.group({
      title: ['', Validators.required],
      sdesc: ['', Validators.required],
      desc: ['', Validators.required]
    });
  }
}
