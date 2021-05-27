import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../model/userModel';
import { Sme } from '../model/smelistModel'
import { INFO } from '../model/smeinfoModel';

@Injectable({
  providedIn: 'root'
})
export class GrowmoreApiService {

  constructor(private http: HttpClient) { }
  /**
   * */
  getAllUsers(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/users')
      .pipe(
        catchError((error: HttpErrorResponse) =>
          observableThrowError(error.error || 'Server error')));
  }
  /**
   * */
  createUser(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/users/register', { user: user })
      .pipe(
        catchError((error: HttpErrorResponse) =>
          observableThrowError(error.error || 'Server error')));
  }
  /**
   * */
  getUserByEmail(user: User): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/users/getUser/' + user.emailAddress)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          observableThrowError(error.error || 'Server error')));

  }
  getInfoByName(smename: string): Observable<any> {
    return this.http.get<INFO>('http://localhost:3000/api/smeinfo/' + smename)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          observableThrowError(error.error || 'Server error')));
  }

  /**
   * for SMEs list pulling from DB.
   * */
  getAllSMEs(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/smes')
      .pipe(
        catchError((error: HttpErrorResponse) =>
          observableThrowError(error.error || 'Server error')));
  }


}
