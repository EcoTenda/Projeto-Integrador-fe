import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  produto: Produto = new Produto();
  listaProdutos: Produto[];

  categoria: Categoria = new Categoria();
  listaCategoria: Categoria[];
  validaNome: string;
  validaEmail: string;

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0);
    this.getProdutos();
    this.getCategorias();
  }

  getProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  getCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    })
  }

  validarNome(event: any) {
    this.validaNome = event.target.value
  }

  validarEmail(event: any) {
    this.validaEmail = event.target.value
  }

  enviar() {
    if (this.validaNome == undefined || this.validaEmail == undefined) {
      this.alertas.showAlertDanger('Insira todos os dados antes de enviar!')
    } else {    
    this.alertas.showAlertSuccess('Dados enviados com sucesso! Você receberá nossas ofertas a partir de agora.')
    }
  }
}
