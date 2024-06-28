import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../../shared/service/posts.service';
@Component({
  selector: 'app-show-news',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './show-news.component.html',
  styleUrl: './show-news.component.css'
})
export class ShowNewsComponent implements OnInit {

  items : any = []

  ngOnInit() {
    this.getAll()
}

constructor(private postsService : PostsService){

}

getAll(){
  this.postsService.getAll().subscribe(res =>{
    this.items=res})      }
   

}
