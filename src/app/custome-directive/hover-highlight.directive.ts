import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  

  constructor(private element:ElementRef) {
      
   }

   @HostListener('mouseenter')
  anyNameMouseEnter():void{
    console.log("anyNameMouseEnter:::::::::: ");
     //this.element.nativeElement.style.color="red";
     this.element.nativeElement.style="background-color:yellow"; 
  }
  @HostListener('mouseleave')
  anyNameMouseExit():void{
    this.element.nativeElement.style="initial";
 }
}
