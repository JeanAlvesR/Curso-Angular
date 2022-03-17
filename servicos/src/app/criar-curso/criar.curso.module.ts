import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CursosService } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';
import { RececeberCursoCriadoComponent } from '../receceber-curso-criado/receceber-curso-criado.component';


@NgModule({
  declarations: [
   CriarCursoComponent,
   RececeberCursoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CriarCursoComponent]

  //providers: [CursosService], //Serviços injetados são colocados aqui
  
})
export class CriarCursoModule { }
