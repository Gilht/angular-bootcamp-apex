import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, OnInit } from '@angular/core';

@Directive({
  selector: '[capitalize]',
  standalone: true
})
export class CapitalizeDirectiveDirective {

  constructor(public ele: ElementRef<HTMLElement>)  {
    console.log(ele.nativeElement)
    this.capitalizeWord(ele.nativeElement.innerText)
   }


 public capitalizeWord(word: string) {
  if(!word) return word;

  return word[0].toUpperCase() + word.substring(1).toLowerCase();
 }
}
