import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http: HttpClient) {

  }
  registerUser(user) {
    return this.http.post(`${environment.BASE_API_URL}/user`, user)

  }
  loginUser(user) {
    return this.http.post(`${environment.BASE_API_URL}/user/login`, user)
  }
}
