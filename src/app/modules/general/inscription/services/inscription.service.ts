import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http: HttpClient) {
  }

  registerUser(user) {
    return this.http.post(`${environment.BASE_API_URL}/user/register`,user)

  }

}
