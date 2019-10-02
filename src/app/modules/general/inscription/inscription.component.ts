import { Component, OnInit } from '@angular/core';
import { InscriptionService } from './services/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  userRegister;
  password2
  form: {
    prenom: String,
    nom: String,
    login: String,
    password: String

  }
  constructor(private inscriptionService: InscriptionService) {
    this.form = {
      prenom: '',
      nom: '',
      login: '',
      password: ''

    }
  }

  ngOnInit() {
  }
  resetForm() {
    this.form = {
      prenom: '',
      nom: '',
      login: '',
      password: ''

    }
    this.password2 = "";
  }
  confirmPassword() {
    if (this.form.password !== this.password2) {
      return false
    } else
      return true
  }
  register() {
    console.log("data", this.form)
    this.inscriptionService.registerUser(this.form)
      .subscribe((data: { status: string; response: {} }) => {
        this.userRegister = data.response;
        this.resetForm();
        console.log("user inscrit", this.userRegister);
      });

  }

}
