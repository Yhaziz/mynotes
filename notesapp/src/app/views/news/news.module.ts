import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';

import { ShowNewsComponent } from './show-news/show-news.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ShowNewsComponent
  ]
})
export class NewsModule { }
