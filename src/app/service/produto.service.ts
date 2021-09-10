import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

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

  getAllProduto(): Observable<Produto[]>{
    return this.http.get<Produto[]>('https://ecotendabe.herokuapp.com/produtos')
  }

  getIdProduto(id: number): Observable<Produto>{
    return this.http.get<Produto>(`https://ecotendabe.herokuapp.com/produtos/${id}`, this.token)
  }

  postProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('https://ecotendabe.herokuapp.com/produtos', produto, this.token)
  }

  putProduto(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>('https://ecotendabe.herokuapp.com/produtos', produto, this.token)
  }

  deleteProduto(id: number){
    return this.http.delete<Produto>(`https://ecotendabe.herokuapp.com/produtos/${id}`, this.token)
  }
  
}
