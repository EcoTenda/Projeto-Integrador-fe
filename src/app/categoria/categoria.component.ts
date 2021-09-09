import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {


  categoria: Categoria = new Categoria();
  listaCategoria: Categoria[];

  constructor(
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(){
    this.fingByAllCat();
  }

  fingByAllCat(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategoria = resp
    })
  }
}
