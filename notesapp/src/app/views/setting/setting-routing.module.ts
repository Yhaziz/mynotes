import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowSettingComponent } from './show-setting/show-setting.component';

const routes: Routes = [
  {
    path : '',
    component : ShowSettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
