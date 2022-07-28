import {  CursoService } from './product-list.component.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  cursos: any;

  constructor(private cursosService: CursoService) { }

  ngOnInit(): void {

    this.cursos = this.cursosService.readCurso().subscribe(((data: any) => {
      this.cursos = data;
      console.log(this.cursos);
    }))

  }

}
