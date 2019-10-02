import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private http: HttpClient) {

  }

  loginUser(user) {
    return this.http.post(`${environment.BASE_API_URL}/user/login`, user);

  }
}
