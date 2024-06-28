import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { ShowSettingComponent } from './show-setting/show-setting.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SettingRoutingModule,
    ShowSettingComponent
  ]
})
export class SettingModule { }
