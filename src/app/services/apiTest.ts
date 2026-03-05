import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import type { ApiInterface } from '../models/apiInterface';

@Injectable({
  providedIn: 'root',
})
export class Hola {
  constructor(private http: HttpClient) {}

  getApi() {
    return this.http.get<ApiInterface>(`${environment.apiUrl}/status`);
  }
}
