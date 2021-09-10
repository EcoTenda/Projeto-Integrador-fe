import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  produto: Produto = new Produto();
  idProduto: number;

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){

    if(environment.token == ''){
      this.router.navigate(['/login']);
    }

    this.produtoService.refreshToken();

    this.idProduto = this.route.snapshot.params['id']
    this.findById(this.idProduto)
  }

  findById(id: number){
    this.produtoService.getIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp;
    })}

    apagar(){
      this.produtoService.deleteProduto(this.idProduto).subscribe(()=>{
        alert('Produto apagado com sucesso!')
        this.router.navigate(['/produto'])
      })
    }
  
}
