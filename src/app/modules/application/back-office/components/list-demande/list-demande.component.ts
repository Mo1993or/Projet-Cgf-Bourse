import { Component, OnInit, Input } from '@angular/core';
import { BackOfficeService } from '../../services/back-office.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-list-demande',
  templateUrl: './list-demande.component.html',
  styleUrls: ['./list-demande.component.css']
})
export class ListDemandeComponent implements OnInit {

  // usersDemande;
  @Input()
  usersToValidDemande;
  userValidateDoc;
  userToLoad;
  form: {
    photoArevoir: Boolean,
    factureArevoir: Boolean,
    cniArevoir: Boolean,
    commentaire: String
  }

  fileRemoteSrc = `${environment.BASE_API_URL}/attachments/`;
  constructor(public _d: DomSanitizer, private backofficeService: BackOfficeService) {
    this.form = {
      photoArevoir: false,
      factureArevoir: false,
      cniArevoir: false,
      commentaire: ""

    }

  }
  ngOnInit() {
    // this.getUsers();
  }
  // getUsers() {
  //   this.backofficeService.getUsers().subscribe((data: { status: String; response: [] }) => {
  //     this.usersDemande = data.response;
  //     console.log("users", this.usersDemande);
  //   });
  // }
  chargerUser(userId) {
    console.log("userId", userId);
    this.backofficeService.getUser(userId)
      .subscribe((data: { status: string; response: {} }) => {
        this.userToLoad = data.response;
        console.log("userToLoad", this.userToLoad);
        console.log("etatphoto", this.userToLoad.photoArevoir);
        this.initForm();
      });
  }
  initForm() {
    this.form.photoArevoir = this.userToLoad.photoArevoir;
    this.form.cniArevoir = this.userToLoad.cniArevoir;
    this.form.factureArevoir = this.userToLoad.factureArevoir;
    this.form.commentaire = this.userToLoad.commentaire;
  }
  validerDoc(userId) {
    console.log("userid", userId);
    console.log("usertof", this.form.photoArevoir);
    console.log("usercni", this.form.cniArevoir);
    this.backofficeService.validerDoc(this.form, userId)
      .subscribe((data: { status: string; response: [] }) => {
        this.userValidateDoc = data.response;
        console.log("userValidDoc", this.userValidateDoc);
        // this.getUsers();
      });

  }
}
