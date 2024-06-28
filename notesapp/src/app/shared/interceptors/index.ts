import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { jwtInterceptor } from "./jwt.interceptor";
import { errorInterceptor } from "./error.interceptor";

export const httpInterceptorProviders = [

    {provide : HTTP_INTERCEPTORS, useClass: jwtInterceptor , multi:true},
    {provide : HTTP_INTERCEPTORS, useClass: errorInterceptor , multi:true}
];