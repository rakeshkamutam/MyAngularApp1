import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('authToken'); // Assuming the token is stored in localStorage
  if (token) {
    // Clone the request and set the new header in one step.
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }
  return next(req);
};
