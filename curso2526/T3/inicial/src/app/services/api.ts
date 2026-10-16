import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserReponse } from '../model/ususario';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private servicioHttp: HttpClient) {}

  getAllUsers(): Observable<UserReponse> {
    return this.servicioHttp.get<UserReponse>('https://dummyjson.com/users');
  }
}
