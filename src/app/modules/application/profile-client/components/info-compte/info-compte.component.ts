import { Component, OnInit, Input } from '@angular/core';
import { ProfileClientService } from '../../services/profile-client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-compte',
  templateUrl: './info-compte.component.html',
  styleUrls: ['./info-compte.component.css']
})
export class InfoCompteComponent implements OnInit {

  @Input()
  userCompte;
  @Input()
  comptes;
  @Input()
  profilage

  constructor(
    // private activedRoute:ActivatedRoute,private profileClientService: ProfileClientService
  ) {
    // this.userId = this.activedRoute.snapshot.paramMap.get('userId');
  }
  ngOnInit() {
    // this.getCompte();
    // this.getcomptes();
    // this.getProfilage();
  }


  // getCompte() {
  //   this.profileClientService.getCompte(this.userId)
  //     .subscribe((data: { status: string; response: {} }) => {
  //       this.userCompte = data.response
  //       console.log("usercompte", this.userCompte)
  //     })

  // }
  // getcomptes() {
  //   this.profileClientService.getComptes().subscribe((data: { status: string; response: [] }) => {
  //     this.comptes = data.response;
  //   });
  // }
  // getProfilage(){
  //   this.profileClientService.getProfilage(this.userId).subscribe((data:{status:string;response:[]})=>{
  //     this.profilage=data.response;
  //     console.log("profilage",this.profilage)
  //   });
  // }
}
