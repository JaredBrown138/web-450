import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColorGrading]'
})


export class ColorGradingDirective {

  @Input('appColorGrading') gradeValue: Number;

  constructor(private element: ElementRef) {

  }
  ngOnInit() {
    this.colorGrade(this.gradeValue);
  }

  colorGrade(value: Number) {
    console.log(this.gradeValue);
    console.log(value);
    console.log("Directive Fired");
    switch (true) {
      case (value >= 90):
        this.element.nativeElement.style.color = "#1ada89";
        break;
      case (value >= 80):
        this.element.nativeElement.style.color = "blue";
        break;
      case (value >= 70):
        this.element.nativeElement.style.color = "blue";
        break;
      case (value >= 60):
        this.element.nativeElement.style.color = "blue";
        break;
      case (value >= 50):
        this.element.nativeElement.style.color = "blue";
        break;
      case (value >= 40):
        this.element.nativeElement.style.color = "blue";
        break;
      case (value >= 30):
        this.element.nativeElement.style.color = "blue";
        break;
      case (value >= 20):
        this.element.nativeElement.style.color = "blue";
        break;
      case (value >= 10):
        this.element.nativeElement.style.color = "blue";
        break;
      case (value >= 0):
        this.element.nativeElement.style.color = "#c84318";
        break;
    }
  }

}
