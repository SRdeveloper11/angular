import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Customer } from './customer';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://jsonplaceholder.typicode.com/users';

 // Http Options
 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json'
   })
 }
   constructor(private http: HttpClient) {}
   // HttpClient API
   get() method => Fetch employees list
getCustomers(): Observable<Customer> {
 return this.http.get<Customer>(this.apiURL)
 .pipe(
   retry(1),
   catchError(this.handleError)
 )
}
// Error handling
handleError(error) {
 let errorMessage = '';
 if(error.error instanceof ErrorEvent) {
   // Get client-side error
   errorMessage = error.error.message;
 } else {
   // Get server-side error
   errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
 }
 window.alert(errorMessage);
 return throwError(errorMessage);
}

}
