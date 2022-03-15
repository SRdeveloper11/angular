import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Customers } from './customers';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://jsonplaceholder.typicode.com/users';
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
  constructor(private http:HttpClient) { }
  getCustomers(): Observable<Customers> {
  return this.http.get<Customers>(this.apiURL)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}
 handleError(error:any) {
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
