import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  listaProdutos: Produto[];

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit(){
  this.findByProdutos();
  }

  findByProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) =>{
      this.listaProdutos = resp;
    })
  }
}
