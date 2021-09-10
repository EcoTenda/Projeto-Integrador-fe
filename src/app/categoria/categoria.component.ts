import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
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
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(){
    this.fingByAllCat();

    if(environment.token == ''){
      this.router.navigate(['/login']);
    }
  }

  fingByAllCat(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategoria = resp
    })
  }
}
