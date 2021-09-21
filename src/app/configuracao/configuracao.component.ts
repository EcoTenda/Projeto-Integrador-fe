import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.css']
})
export class ConfiguracaoComponent implements OnInit {

  categoria: Categoria = new Categoria();
  listaCategoria: Categoria[];
  idCategoria: number;

  produto: Produto = new Produto();

  usuario: Usuario = new Usuario();
  idUser = environment.id;
  tipoUser = environment.tipo;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private produtoService: ProdutoService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/login'])}

      this.produtoService.refreshToken();
      this.categoriaService.refreshToken();

      this.getAllCategorias();
  }

  criarCategoria() {
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp
      this.alertas.showAlertSuccess('Categoria criada com sucesso!')
      this.categoria = new Categoria();
    })
  }

  getAllCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    })
  }


  findByIdCategoria() {
    this.categoriaService.findById(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }

  criarProduto() {

    this.categoria.id = this.idCategoria;
    this.produto.categoria = this.categoria;

    this.usuario.id = this.idUser;
    this.produto.usuario = this.usuario;

    console.log(this.produto)

    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;
      this.alertas.showAlertSuccess('Produto cadastrado com sucesso!')
      this.produto = new Produto();
    })


  }
}

