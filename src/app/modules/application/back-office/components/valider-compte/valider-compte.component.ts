import { Component, OnInit, Input } from '@angular/core';
import { BackOfficeService } from '../../services/back-office.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-valider-compte',
  templateUrl: './valider-compte.component.html',
  styleUrls: ['./valider-compte.component.css']
})
export class ValiderCompteComponent implements OnInit {

  @Input()
  usersToCreateCompte
  // usersDemande;
  userValidCompte
  userToLoad;
  // form: {
  //   userId: String
  //   commentaire: String
  // }

  fileRemoteSrc = `${environment.BASE_API_URL}/attachments/`;
  constructor(public _d: DomSanitizer, private backofficeService: BackOfficeService) {
    // this.form = {
    //   userId: "",
    //   commentaire: ""

    // }

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
  // chargerUser(userId) {
  //   console.log("userId", userId);
  //   this.backofficeService.getUser(userId)
  //     .subscribe((data: { status: string; response: {} }) => {
  //       this.userToLoad = data.response;
  //       console.log("userToLoad", this.userToLoad);
  //       // this.initForm();
  //     });
  // }
  // initForm() {
  //   // this.form.photoArevoir = this.userToLoad.photoArevoir;
  //   // this.form.cniArevoir = this.userToLoad.cniArevoir;
  //   // this.form.factureArevoir = this.userToLoad.factureArevoir;
  //   this.form.commentaire = this.userToLoad.commentaire;
  // }
  CreateCompte(userId) {
    // this.form.userId = userId
    console.log("userid", userId);
    // console.log("usertof", this.form.photoArevoir);
    // console.log("usercni", this.form.cniArevoir);
    this.backofficeService.CreateCompte({ userId: userId })
      .subscribe((data: { status: string; response: [] }) => {
        this.userValidCompte = data.response;
        // this.getUsers();
        console.log("userValidCompte", this.userValidCompte)

        console.log("userId", this.userValidCompte.user)

      });

  }
}