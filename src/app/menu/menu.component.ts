import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 
  nome = environment.nome
  foto = environment.foto
  id = environment.id

  testefalso = false;
  testeverdade = true;


  constructor(
    private auth: AuthService
  ) { }

  ngOnInit( ){
  
  }
  

  sair(){
    environment.token = '';
    environment.nome = '';
    environment.foto = '';
    environment.id = 0;
  }

}
