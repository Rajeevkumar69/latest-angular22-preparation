import { HttpInterceptorFn } from "@angular/common/http";

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {

     // JWT Authentication
     const token = localStorage.getItem('token');

     if (token) {
          const authToken = req.clone({
               setHeaders: {
                    Authorization: `Bearer ${token}`
               }
          });
          return next(authToken);
     } else {
          return next(req);
     }
};