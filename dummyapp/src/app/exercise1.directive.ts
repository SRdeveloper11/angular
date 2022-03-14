import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appExercise1]'
})
export class Exercise1Directive {

  constructor(el_1:ElementRef) {
  el_1.nativeElement.style.color =" Red";
}

}
