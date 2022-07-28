import { Component, Input, OnInit } from '@angular/core';
import { Cursos } from '../model/cursos';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  Curso!: Cursos;

  constructor() { }

  ngOnInit(): void {
  }

}
