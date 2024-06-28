// app.module.ts
import { NgModule } from '@angular/core';
import { httpInterceptorProviders } from './shared/interceptors'; // Adjust the path as needed

@NgModule({

  providers: [
    httpInterceptorProviders
    
  ],

})
export class AppModule { }
