import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-tela-compra',
  templateUrl: './tela-compra.component.html',
  styleUrls: ['./tela-compra.component.css']
})
export class TelaCompraComponent implements OnInit {

  produto: Produto = new Produto();
  idProduto: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    this.idProduto = this.route.snapshot.params['id'];
    this.findById(this.idProduto);
  }

  findById(id: number){
    this.produtoService.getIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp;
    })
  }

  comprar() {
    this.alertas.showAlertSuccess('Compra realizada com sucesso!')
  }

  calcularCEP() {
    this.alertas.showAlertSuccess('CEP calculado!')
  }

}
