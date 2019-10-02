import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ConnexionService } from './services/connexion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {


  @ViewChild('btnClose', { static: false })
  btnClose: ElementRef;

  form: {
    login: String,
    password: String
  }
  userLogin;


  @Output()
  etatLogin = new EventEmitter<boolean>();


  constructor(private connexionService: ConnexionService,
    private router: Router) {
    this.form = {
      login: '',
      password: ''

    }
  }

  resetForm() {
    this.form = {
      login: '',
      password: ''

    }
    this.userLogin = null;
  }

  ngOnInit() {
  }
  connecter() {
    console.log("user trouver", this.form);
    this.connexionService.loginUser(this.form)
      .subscribe((data: any) => {

        this.userLogin = data.response;
        if (this.userLogin.login && this.userLogin.admin === true) {
          this.etatLogin.emit(true);

          const userId = this.userLogin._id;
          this.resetForm();
          this.btnClose.nativeElement.click();
          this.router.navigate(['/backoffice']);

        } else {
          this.etatLogin.emit(true);

          const userId = this.userLogin._id;
          this.resetForm();
          this.btnClose.nativeElement.click();
          this.router.navigate(['/profile', userId]);
        }

      });

  }
}
