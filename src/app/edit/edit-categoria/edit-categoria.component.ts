import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria();
  id: number;

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(){
    if (environment.token == '') {
      this.router.navigate(['/login']);
    }
    this.id = this.route.snapshot.params['id'];

    this.findByIdCat(this.id)
  }

  findByIdCat(id: number){
    return this.categoriaService.findById(id).subscribe((resp: Categoria)=>{
      this.categoria = resp
      this.categoria.id = this.id //Adptação para conseguir editar, Não foi preciso em produtos
    })
  }

  atualizar(){
    this.categoriaService.putCategoria(this.categoria).subscribe((resp: Categoria)=>{
      this.categoria = resp
      alert("Categoria atualizado com sucesso!")
      this.router.navigate(['/categoria'])
    })
  }


}
