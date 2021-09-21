import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllUser(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('https://ecotendabe.herokuapp.com/usuarios/all', this.token)
  }

  getIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://ecotendabe.herokuapp.com/usuarios/${id}`, this.token)
  }

  putUser(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>('https://ecotendabe.herokuapp.com/usuarios/alterar', usuario, this.token)
  }

  deleteUser(id: number){
    return this.http.delete<Usuario>(`https://ecotendabe.herokuapp.com/usuarios/${id}`, this.token)
  }
  
}