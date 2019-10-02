import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileClientService {

  constructor(private http: HttpClient) {

  }



  getUser(userId) {
    return this.http.get(`${environment.BASE_API_URL}/user/${userId}`);

  }



  envoyerPhoto(filePhoto, userId) {
    return this.http.put(`${environment.BASE_API_URL}/user/${userId}/attach-photo`, filePhoto);

  }
  envoyerCni(fileCni, userId) {
    return this.http.put(`${environment.BASE_API_URL}/user/${userId}/attach-cni`, fileCni);

  }
  envoyerFacture(fileFacture, userId) {
    return this.http.put(`${environment.BASE_API_URL}/user/${userId}/attach-facture`, fileFacture);

  }
  envoyerForm(formData, userId) {
    return this.http.put(`${environment.BASE_API_URL}/user/${userId}/ouvrir-compte`, formData);
  }
  envoyerConvention(fileConvention, userId) {
    return this.http.put(`${environment.BASE_API_URL}/user/${userId}/attach-convention`, fileConvention);

  }
  getCompte(userId) {
    return this.http.get(`${environment.BASE_API_URL}/compte/${userId}`);

  }
  getComptes() {
    return this.http.get(`${environment.BASE_API_URL}/compte`);
  }
  profilageClient(data) {
    return this.http.post(`${environment.BASE_API_URL}/profilage/souscrire-produit`, data)
  }
  getProfilage(userId) {
    return this.http.get(`${environment.BASE_API_URL}/profilage/${userId}`);
  }

}
