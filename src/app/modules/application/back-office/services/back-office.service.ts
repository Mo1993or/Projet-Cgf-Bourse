import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackOfficeService {

  constructor(private http: HttpClient) {

  }

  getUsers() {
    return this.http.get(`${environment.BASE_API_URL}/user`);
  }
  validerDoc(dataForm, userId) {
    return this.http.put(`${environment.BASE_API_URL}/user/${userId}/valider-doc`, dataForm);

  }
  getUser(userId) {
    return this.http.get(`${environment.BASE_API_URL}/user/${userId}`);
  }
  CreateCompte(userId) {
    return this.http.post(`${environment.BASE_API_URL}/compte/create-compte`, userId)

  }
}