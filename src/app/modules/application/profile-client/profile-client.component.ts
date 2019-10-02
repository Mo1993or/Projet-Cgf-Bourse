import { Component, OnInit } from '@angular/core';
import { ProfileClientService } from './services/profile-client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.component.html',
  styleUrls: ['./profile-client.component.css']
})
export class ProfileClientComponent implements OnInit {
  userId;
  userLogin;
  userCompte;
  comptes
  profilage
  constructor(private profileClientService: ProfileClientService, private activedRoute: ActivatedRoute) {
    this.userId = this.activedRoute.snapshot.paramMap.get('userId');

    this.profileClientService.getUser(this.userId)
      .subscribe((data: { status: String; response: [] }) => {
        this.userLogin = data.response;
        console.log("userLogin", this.userLogin);
      });
  }
  ngOnInit() {
    this.getCompte();
    this.getcomptes();
    this.getProfilage();
  }


  getCompte() {
    this.profileClientService.getCompte(this.userId)
      .subscribe((data: { status: string; response: {} }) => {
        this.userCompte = data.response
        console.log("usercompte", this.userCompte)
      })

  }
  getcomptes() {
    this.profileClientService.getComptes().subscribe((data: { status: string; response: [] }) => {
      this.comptes = data.response;
    });
  }
  getProfilage() {
    this.profileClientService.getProfilage(this.userId).subscribe((data: { status: string; response: [] }) => {
      this.profilage = data.response;
      console.log("profilage", this.profilage)
    });

  }



}
