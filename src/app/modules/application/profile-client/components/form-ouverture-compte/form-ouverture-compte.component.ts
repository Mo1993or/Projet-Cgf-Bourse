import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ProfileClientService } from '../../services/profile-client.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-form-ouverture-compte',
  templateUrl: './form-ouverture-compte.component.html',
  styleUrls: ['./form-ouverture-compte.component.css']
})
export class FormOuvertureCompteComponent implements OnInit {

  @Input()
  userLogin;

  form: {
    genre: string,
    prenom: String,
    nom: String,
    situationPro: String,
    dateNaissance: String,
    lieuNaissance: String,
    nationalite: String,
    pays: String,
    ville: String,
    region: String,
    adresse: String,
    telephone: String
  }
  photo;
  filePhoto;
  fileCni;
  fileFacture
  photoName;
  photoSrc;
  userId;
  cni;
  facture;
  fileTof;
  fileCn;
  fileFac;
  userData;

  filesSrc = `${environment.BASE_API_URL}/attachments/`;
  photoRemoteSrc;
  cniSrc = "";
  factureSrc = "";
  convention;
  fileConventionResponse;
  conventionSrc = `${environment.BASE_API_URL}/attachments/convention.pdf`;
  showImgInModal = false;
  imgToShow = null;
  constructor(public _d: DomSanitizer, private profileClientService: ProfileClientService,
  ) {
    this.form = {
      genre: "",
      prenom: "",
      nom: "",
      situationPro: "",
      dateNaissance: "",
      lieuNaissance: "",
      nationalite: "",
      pays: "",
      ville: "",
      region: "",
      adresse: "",
      telephone: "",

    }

  }

  ngOnInit() {
    this.initializeForm();

  }

  initializeForm() {
    this.form = this.userLogin;
    this.photo = this.filesSrc + this.userLogin.photo;
    console.log("tooooofff", this.photo)
    this.cni = this.filesSrc + this.userLogin.cni;
    this.facture = this.filesSrc + this.userLogin.facture;
  }
  resetForm() {
  }
  chargerPhoto(files) {
    this.filePhoto = files[0];
    this.photo = window.URL.createObjectURL(this.filePhoto);
    console.log("photo", this.photo);
    console.log("filePhoto", this.filePhoto);
  }

  chargerCni(files) {
    this.fileCni = files[0];
    this.cni = window.URL.createObjectURL(this.fileCni);
    console.log("cni", this.cni);
    console.log("fileCni", this.fileCni);

  }
  chargerFacture(files) {
    this.fileFacture = files[0];
    this.facture = window.URL.createObjectURL(this.fileFacture);
    console.log("facture", this.facture);
    console.log("fileFacture", this.fileFacture);

  }
  envoyerPhoto() {
    const filePhotoData = new FormData();
    filePhotoData.append('photo', this.filePhoto);
    this.profileClientService.envoyerPhoto(filePhotoData, this.userLogin._id).subscribe((data: any) => {
      this.fileTof = data.response;
      //this.changeImgPhoto(this.filesSrc+this.fileTof.photo);
      console.log("file", this.fileTof.photo);
    });
  }

  envoyerCni() {
    const fileCniData = new FormData();
    fileCniData.append('cni', this.fileCni);
    this.profileClientService.envoyerCni(fileCniData, this.userLogin._id).subscribe((data: any) => {
      this.fileCn = data.response;
      console.log("file", this.fileCn)

    });
  }
  envoyerFacture() {
    const fileFactureData = new FormData();
    fileFactureData.append('facture', this.fileFacture);
    this.profileClientService.envoyerFacture(fileFactureData, this.userLogin._id).subscribe((data: any) => {
      this.fileFac = data.response;
      console.log("file", this.fileFac)

    });
  }
  envoyerForm() {
    this.envoyerPhoto();
    this.envoyerCni();
    this.envoyerFacture();
    console.log("data", this.form)
    this.profileClientService.envoyerForm(this.form, this.userLogin._id).subscribe((data: any) => {
      this.userData = data.response;
      console.log("userData", this.userData)

    });
  }
  chargerConvention(files) {
    this.convention = files[0];
    this.envoyerConvention();
  }
  envoyerConvention() {
    const fileConvention = new FormData();
    fileConvention.append('convention', this.convention);
    this.profileClientService.envoyerConvention(fileConvention, this.userLogin._id).subscribe((data: any) => {
      this.fileConventionResponse = data.response;

      console.log("fileconvention", this.fileConventionResponse)
    });
  }


  showImg(url) {
    this.imgToShow = url;
    this.showImgInModal = true;
  }
  hideImg(url) {
    this.imgToShow = null;
    this.showImgInModal = false;
  }
}

