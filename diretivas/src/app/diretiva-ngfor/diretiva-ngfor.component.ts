import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

  jogadores: string[] = ["Cristiano Ronaldo", "Messi", "Pelé", "Ronaldo", "Maradona"];

  constructor() { }

  ngOnInit(): void {
  }

}
