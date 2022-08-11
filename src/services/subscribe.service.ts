import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { OccEndpointsService, UserModule } from '@spartacus/core';
import { User } from '@spartacus/user/account/root/model/user.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserModel } from "src/services/models/UserModel";


// If we comment below annotation, NullInjectorError: No provider for SubscribeService!
 @Injectable(
    {
    providedIn: 'root'
    }
 )
export class SubscribeService {

   //url = "http://localhost:3000/students"; // JSON server
   //url = "http://localhost:3001/students"; // Express JS
   url = "https://localhost:9002/ycommercewebservices/occ/v2/apparel-uk/products/subscribe";

   constructor(private http: HttpClient, private occEndpointService: OccEndpointsService) {
    }

  /**
   * Method is to subscribe newsletter [Creating a resource]
   *
   * @param data
   * @returns
   */
  subscribeNewsLetter(data: any)
  {
     const url = `${this.occEndpointService.getBaseEndpoint()}/products/subscribe`;
     console.log(`URL: ${url}`) //https://localhost:9002/occ/v2/electronics-spa/products/subscribe
     return this.http.post(url, data)
     .pipe(retry(2), catchError(this.handleError));
  }

  /**
   * Method is to get all Users
   *
   * @returns
   */
   getAllUsers():Observable<UserModel[]>{
    //const url = "http://localhost:3000/posts";
    const url = "https://jsonplaceholder.typicode.com/users";
    console.log("🚀 ~ file: subscribe.service.ts ~ line 47 ~ SubscribeService ~ getAllUsers ~ url", url)
    console.log("URL::", url)
    return this.http.get<UserModel[]>(url)
    .pipe(retry(1), catchError(this.handleError));
  }

  /**
   * Updating a resource
   *
   * @param error
   * @returns
   */
  updateUser(): Observable<any>
  {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    const header = new HttpHeaders({
      'contentType' : 'applicaiton/json',
      'authenticationToken' : 'Test12345',
      'userId' : '12345',
    })
    const body = {
      name: "Hamid",
      id: 1
    }
    return this.http.put(url, body, {headers: header})
         .pipe(retry(2), catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}


