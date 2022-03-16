import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'cyan';

  @HostListener('mouseenter') onMouseOver() {
    /*this.renderer2.setStyle(this.elementeRef.nativeElement, 'background-color', 'cyan');
    */
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    /*this.renderer2.setStyle(this.elementeRef.nativeElement, 'background-color', 'white');
    */
   this.backgroundColor = this.defaultColor;
  }


  constructor() { 
  }
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
