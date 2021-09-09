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

  getAllProduto(): Observable<Produto[]>{
    return this.http.get<Produto[]>('https://ecotendabe.herokuapp.com/produtos')
  }

  postProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('https://ecotendabe.herokuapp.com/produtos', produto, this.token)
  }
}
