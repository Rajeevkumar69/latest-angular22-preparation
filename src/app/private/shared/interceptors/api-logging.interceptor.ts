import { HttpEventType, HttpInterceptorFn } from "@angular/common/http";
import { tap } from "rxjs/operators";


export const apiLoggingInterceptor: HttpInterceptorFn = (req, next) => {

     console.log('Request: ', req.method, req.url);

     return next(req).pipe(
          tap(event => {
               if (event.type === HttpEventType.Response) {
                    console.log('Response', req.method, req.url);

               }
          })
     )
};