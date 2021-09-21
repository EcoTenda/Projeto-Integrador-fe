import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { AlertasService } from 'src/app/service/alertas.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = new Categoria();
  idCategoria: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriaService: CategoriaService,
    private alertas: AlertasService
  ) { }

  ngOnInit(){

    if(environment.token == ''){
      this.router.navigate(['/login']);
    }

    this.categoriaService.refreshToken();

    this.idCategoria = this.route.snapshot.params['id'];
    this.findById(this.idCategoria)
  }

  findById(id: number){
    this.categoriaService.findById(id).subscribe((resp: Categoria)=>{
      this.categoria = resp
      
    })}

  apagar(){
    this.categoriaService.deleteCategoria(this.idCategoria).subscribe(()=>{
      this.alertas.showAlertSuccess('Categoria apagada com sucesso!')
      this.router.navigate(['/categoria'])
    })
  }
}
