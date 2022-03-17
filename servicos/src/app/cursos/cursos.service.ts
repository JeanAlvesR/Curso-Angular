import { EventEmitter, Injectable } from '@angular/core';

import { LogService } from './../shared/log.service';

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();


    cursos: string[] = ["Angular", "Java", "JavaScript"];

    constructor(private logService: LogService) {
        console.log('Uma instância');
    }

    getCursos() {
        this.logService.consoleLog('Obtendo Lista de Cursos');
        return this.cursos;
    }

    addCurso(curso: string) {
        this.logService.consoleLog(`Criando um novo curso: ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}