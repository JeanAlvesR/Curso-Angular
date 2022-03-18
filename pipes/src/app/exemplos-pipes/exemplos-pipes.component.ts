import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {


 verificador: string = '';

  livro: any = {
    titulo: 'H.P. Lovecraft - Medo Clássico - Vol. 1 - Cosmic Edition: O mestre dos mestres para todas as gerações',
    rating: 4.82365,
    numeroPaginas: 384,
    preco: 42.90,
    dataLancamento: new Date(2017, 11, 14),
    url: 'https://www.amazon.com.br/dp/8594540795/ref=cm_sw_r_tw_dp_75A4PJWN66VVDRHCVFM7' 
  }

  livros: string[] = ["Harry Potter 1", "Harry Potter 2", "Harry Potter 3", "Lovecraft: The Call of Cthulhu"]

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor Assíncrono'),2000) //2000 = 2s
  });

  valorAsync2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2'));


  constructor() { }

  ngOnInit(): void {
  }



  AddLivro(livro:any ) {
    this.livros.push(livro);
  }

  obterLivros() {
    if(this.livros.length === 0|| this.verificador === null || this.verificador.trim() === ''){
      return this.livros;
    }

    
    return this.livros.filter((v:any) => {
       if(v.toLocaleLowerCase().indexOf(this.verificador) != -1){
          return true;
       }
       return false;
    }
    )
  }

}
