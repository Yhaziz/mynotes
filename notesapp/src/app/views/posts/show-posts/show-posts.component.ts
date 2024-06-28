import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule ,Validators } from '@angular/forms';
import { PostsService } from '../../../shared/service/posts.service';
@Component({
  selector: 'app-show-posts',
  standalone: true,
  imports: [RouterModule,CommonModule,ReactiveFormsModule],
  templateUrl: './show-posts.component.html',
  styleUrl: './show-posts.component.css'
})
export class ShowPostsComponent implements OnInit {

  showPost: FormGroup;
  itemId: string | null = null;
  itemDetails: any = {};

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {
    this.showPost = this.fb.group({
      title: [{ value: '', disabled: true }],
      sdesc: [{ value: '', disabled: true }],
      desc: [{ value: '', disabled: true }]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = params['id'];
      if (this.itemId) {
        this.postsService.get(this.itemId).subscribe((res: any) => {
          this.itemDetails = res;
          this.showPost.patchValue({
            title: res.title,
            sdesc: res.sdesc,
            desc: res.desc
          });
        });
      }
    });
  }
}