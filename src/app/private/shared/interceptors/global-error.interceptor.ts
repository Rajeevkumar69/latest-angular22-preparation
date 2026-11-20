import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

export const globalErrorInterceptor: HttpInterceptorFn = (req, next) => {

     // Handling global error
     return next(req).pipe(
          catchError((error: HttpErrorResponse) => {
               console.log('HTTP Error', error?.status);
               return throwError(() => error);
          })
     )
};