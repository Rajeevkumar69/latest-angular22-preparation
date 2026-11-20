import { HttpInterceptorFn } from '@angular/common/http';

export const appVersionInterceptor: HttpInterceptorFn = (req, next) => {

     //  Set the headers to the Backend API 
     const modifiedRequest = req.clone({
          setHeaders: {
               'app-version': '1.0'
          }
     });
     return next(modifiedRequest);
};