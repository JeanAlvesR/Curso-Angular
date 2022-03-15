import { Component, OnInit, Input,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {


  @Output() mudouValor = new EventEmitter()


  @Input() valor: number = 0;

  @ViewChild('campoInput')
  campoValorInput!: ElementRef<any>;


  incrementa() {
    console.log(this.campoValorInput.nativeElement.value++);
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    console.log(this.campoValorInput.nativeElement.value--);
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
