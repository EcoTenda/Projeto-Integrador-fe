import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  idUser = environment.id;
  confirmarSenha: string;
  tipoUsuario: string;
  senha: string;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
  ) { }

  ngOnInit(){
    this.findById(this.idUser)
    if(environment.token == ''){
      this.router.navigate(['/login']);
    }

    this.usuarioService.refreshToken();
  }

  findById(id: number){
    this.usuarioService.getIdUser(id).subscribe((resp: Usuario)=>{
      this.usuario = resp;
    })
  }

  confirmSenha(event:any) {
    this.confirmarSenha = event.target.value

  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  atualizar(){
      this.usuario.senha = this.senha   
      this.usuarioService.putUser(this.usuario).subscribe((resp: Usuario)=>{
      this.usuario = resp;
      alert('Usuário atualizado com sucesso!');
      this.router.navigate(['/configuracao'])
    })
  }
}
