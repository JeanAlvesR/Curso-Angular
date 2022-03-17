import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-receceber-curso-criado',
  templateUrl: './receceber-curso-criado.component.html',
  styleUrls: ['./receceber-curso-criado.component.css']
})
export class RececeberCursoCriadoComponent implements OnInit {

  curso: string = '';

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursosService.emitirCursoCriado.subscribe(cursoCriado=>this.curso = cursoCriado);
    
  }

}
