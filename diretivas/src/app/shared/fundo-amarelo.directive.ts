import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
    console.log(elementRef);
    //elementRef.nativeElement.style.backgroundColor = 'yellow'; -> Evitar esse tipo de mundaça, pois torna a aplicação vunerável
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow'); //Jeito mais seguro
  }

}
