import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-todos-produtos',
  templateUrl: './todos-produtos.component.html',
  styleUrls: ['./todos-produtos.component.css']
})
export class TodosProdutosComponent implements OnInit {

  listaProdutos: Produto[];
  produto: Produto = new Produto();

  constructor(
    private produtoService: ProdutoService,
  ) { }

  ngOnInit(){
    this.getAllProduto();
  }

  getAllProduto(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) =>{
      this.listaProdutos = resp;
    })
  }

}
