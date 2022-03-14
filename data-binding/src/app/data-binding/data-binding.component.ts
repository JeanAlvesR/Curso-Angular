import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://JeanAlves.com';
  cursoAngular: boolean = true;

  urlImagem2: string = 'https://media.nu.nl/m/3yrxr70asrqb_sqr256.jpg/teruggekeerde-ronaldo-old-trafford-voor-mij-altijd-magische-plek-geweest.jpg';
  urlImagem: string = 'https://picsum.photos/200';

  valorAtual: string = '';
  valorSalvo: string= '';

  isMouseOver: boolean = false;

  name: string = '';

  nomeDoCurso: string = 'Angular';

  person: any = {

    nome: 'Jean',
    idade: 20
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() { 

    setTheme('bs4');
  }

  ngOnInit(): void {
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) { 
    this.valorAtual =(<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any) {
    console.log(evento);
  }

}
