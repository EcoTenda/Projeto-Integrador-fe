import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  
  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  login(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://ecotendabe.herokuapp.com/usuarios/logar',
      userLogin)
  }
  
  
  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://ecotendabe.herokuapp.com/usuarios/cadastrar', 
    usuario)
}

logado(){
  let ok: boolean = false

  if(environment.token != '') {
    ok = true
  }
  
  return ok
}

}
