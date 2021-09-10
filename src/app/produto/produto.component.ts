import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
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
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(){
  this.findByProdutos();

  if(environment.token == ''){
    this.router.navigate(['/login']);
  }
  }

  findByProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) =>{
      this.listaProdutos = resp;
    })
  }
}
