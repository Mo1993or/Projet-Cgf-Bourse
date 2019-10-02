import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileClientService } from '../../services/profile-client.service';
@Component({
  selector: 'app-form-profilage',
  templateUrl: './form-profilage.component.html',
  styleUrls: ['./form-profilage.component.css']
})
export class FormProfilageComponent implements OnInit {
 userId;
  alert;
  alertdanger;
  produitq;
  produita;
  produitc;
  produith;
  produitph;
  produitAs;
  profilageClient;
​
  form: {
    temps: string,
    horizon: String,
    montant: String,
    projet: String,
    risque: String,
​
​
  }
​
  constructor(private activeRoute: ActivatedRoute, private profileClientService: ProfileClientService) {
    this.form = {
      temps: "",
      horizon: "",
      montant: "",
      projet: "",
      risque: "",
​
    }
​
​
  }
  id;
  produit
  souscrireq() {
    let profilage = {
      userId: this.id,
      produit: this.produit
    }
    profilage.userId = this.activeRoute.snapshot.paramMap.get('userId');
    profilage.produit = "FCP QUIETUDE";
    this.profileClientService.profilageClient(profilage)
      .subscribe((data: { status: String; response: [] }) => {
​
        this.profilageClient = data.response;
​
        console.log("user profilage", this.profilageClient)
        this.alert = "votre souscription sur ce produit a reussi ";
      });
  }
  souscrirea() {
    let profilage = {
      userId: this.id,
      produit: this.produit
    }
    this.userId = this.activeRoute.snapshot.paramMap.get('userId');
    console.log(this.userId);
    profilage.userId = this.userId;
    profilage.produit = "FCP AVANTAGE";
    this.profileClientService.profilageClient(profilage)
      .subscribe((data: { status: String; response: [] }) => {
        this.profilageClient = data.response;
​
        console.log("user profilage", this.profilageClient);
        this.alert = "votre souscription sur ce produit a reussi ";
​
      });
  }
  souscrirec() {
    let profilage = {
      userId: this.id,
      produit: this.produit
    }
    profilage.userId = this.activeRoute.snapshot.paramMap.get('userId');
    profilage.produit = "FCP CROISSANT";
    this.profileClientService.profilageClient(profilage)
      .subscribe((data: { status: String; response: [] }) => {
​
        this.profilageClient = data.response;
​
        console.log("user profilage", this.profilageClient);
        this.alert = "votre souscription sur ce produit a reussi ";
​
      });
  }
  souscrireh() {
    let profilage = {
      userId: this.id,
      produit: this.produit
    }
    profilage.userId = this.activeRoute.snapshot.paramMap.get('userId');
    profilage.produit = "FCP HORIZON";
    this.profileClientService.profilageClient(profilage)
      .subscribe((data: { status: String; response: [] }) => {
​
        this.profilageClient = data.response;
​
        console.log("user profilage", this.profilageClient);
        this.alert = "votre souscription sur ce produit a reussi ";
​
      });
  }
  souscrireph() {
    let profilage = {
      userId: this.id,
      produit: this.produit
    }
    profilage.userId = this.activeRoute.snapshot.paramMap.get('userId');
    profilage.produit = "FCP PHARMACIE";
    this.profileClientService.profilageClient(profilage)
      .subscribe((data: { status: String; response: [] }) => {
​
        this.profilageClient = data.response;
​
        console.log("user profilage", this.profilageClient);
        this.alert = "votre souscription sur ce produit a reussi ";
​
      });
  }
  souscrireAs() {
    let profilage = {
      userId: this.id,
      produit: this.produit
    }
    profilage.userId = this.activeRoute.snapshot.paramMap.get('userId');
    profilage.produit = "FCP ASSUR SENEGAL";
    this.profileClientService.profilageClient(profilage)
      .subscribe((data: { status: String; response:[]}) => {
        this.profilageClient = data.response;
        console.log("user profilage", this.profilageClient);
        this.alert = "votre souscription sur ce produit a reussi ";
​
      });
  }
​
  ngOnInit() {
​
  }
​
​
​
  envoyerForm() {
    console.log(this.form);
    if (this.form.temps === "12" && this.form.risque === "prudent") {
      this.produitq = "FCP QUIETUDE";
      this.produita = "FCP AVANTAGE";
    } else if (this.form.temps === "35" && this.form.risque === "prudent") {
      this.produita = "FCP AVANTAGE";
    }
    else if (this.form.temps === "35" && this.form.risque === "equilibrer") {
      this.produith = "FCP HORIZON";
    } else if (this.form.temps === "57" && this.form.risque === "Dynamique") {
      this.produitc = "FCP CROISSANT";
      this.produitph = "FCP PHARMACIE";
​
    } else if (this.form.temps === "57" && this.form.risque === "equilibrer") {
​
      this.produitAs = "FCP ASSUR SENGAL";
    } else if (this.form.projet === "etudeEnfants" && this.form.risque === "prudent") {
      this.produitq = "FCP QUIETUDE";
    }
    else if (this.form.projet === "retraite" && this.form.risque === "prudent") {
      this.produitq = "FCP QUIETUDE";
    }
    else if (this.form.temps === "57" && this.form.risque === "Dynamique") {
      this.produith = "FCP HORIZON";
    } else {
      this.alertdanger = "Aucun produit correspondant à votre profil";
    }
  }
}
