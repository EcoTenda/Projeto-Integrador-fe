import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin();


  constructor(
    private auth: AuthService,
    private router: Router,
    private alertas: AlertasService
    ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  login() {
    this.auth.login(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp 

      environment.id = this.userLogin.id
      environment.nome = this.userLogin.nome
      environment.foto = this.userLogin.foto
      environment.token = this.userLogin.token
      environment.tipo = this.userLogin.tipo

      this.router.navigate(['/landing-page'])
    }, erro=>{
      if(erro.status == 401){
        this.alertas.showAlertDanger('Usuário ou senha estão incorretos')
      }
    })

  }
}
