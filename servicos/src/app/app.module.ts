import { CriarCursoModule } from './criar-curso/criar.curso.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CriarCursoModule
  ],
  //providers: [CursosService], //Serviços injetados são colocados aqui
  bootstrap: [AppComponent]
})
export class AppModule { }
