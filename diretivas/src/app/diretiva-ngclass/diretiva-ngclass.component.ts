import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

  meuFavorito: boolean = false;

  mudarMeuFavorito() {
    this.meuFavorito = !this.meuFavorito;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
