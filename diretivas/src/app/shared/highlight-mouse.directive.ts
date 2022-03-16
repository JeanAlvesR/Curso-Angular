import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string;


  @HostListener('mouseenter') onMouseOver() {
    /*this.renderer2.setStyle(this.elementeRef.nativeElement, 'background-color', 'cyan');
    */
    this.backgroundColor = 'cyan'
  }

  @HostListener('mouselave') onMouseLeave() {
    /*this.renderer2.setStyle(this.elementeRef.nativeElement, 'background-color', 'white');
    */
   this.backgroundColor = 'white';

  }
  
  constructor(/*private elementeRef: ElementRef, private renderer2:Renderer2 */) { }

}
