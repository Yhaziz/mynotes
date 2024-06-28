import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';



export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.url.startsWith(environment.apiUrl)) {
    
  req = req.clone({
    setHeaders:{
       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG5vdGVzLnRuIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE3MTk1MzQ1MTQsImV4cCI6MTcxOTU3NzcxNH0.5TA5JKQBZnxDCSYxdmsv7ZIHRmXRINzj-idzLtSPy1o'
    }
  });
  
}
  return next(req);
};
