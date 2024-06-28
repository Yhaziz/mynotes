import { HttpInterceptorFn } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { inject } from '@angular/core'; // Import inject
import { Router } from '@angular/router'; // Import Router

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router); 

  return next(req).pipe(
    catchError(err => {
      console.log(err);
      if ([401, 403].indexOf(err.status) !== -1) {
        console.log("error 401 or 403");
        router.navigate(['/auth/login']); 
      }
      return throwError(err);
    })
  );
};
