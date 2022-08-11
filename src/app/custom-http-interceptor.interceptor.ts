import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

@Injectable()
export class CustomHttpInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url === USERS_URL) {
      console.log('Request URL: ' + request.url);
      console.log(new HttpResponse({ status: 200}));
  }
    return next.handle(request);
  }
}
