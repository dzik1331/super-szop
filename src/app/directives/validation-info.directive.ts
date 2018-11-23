import {Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';

// TODO w FAZIE TESTOWANIA NIE USUWAĆ, NIE UŻYWAĆ
@Directive({
  selector: '[appValidationInfo]'
})
export class ValidationInfoDirective implements OnInit, OnChanges {

  @Input() errors;
  @Input() input: FormControl;
  private spanElement;
  private text;
  private spanText;

  constructor(public el: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.errors.firstChange) {
      this.show(this.errors);
    }
  }

  @HostListener('blur', ['$event.target'])
  onFocusout(target) {
    if (this.input) {
      this.input.updateValueAndValidity();
    }
  }

  ngOnInit() {
    const parent = this.el.nativeElement.parentNode;

    // Create a div
    const divElement = this.renderer.createElement('div');
    this.renderer.setStyle(divElement, 'position', 'relative');
    this.spanElement = this.renderer.createElement('div');
    this.spanText = this.renderer.createElement('span');
    this.renderer.setStyle(this.spanElement, 'display', 'none');
    this.renderer.appendChild(this.spanElement, this.spanText);
    this.initSpan();
    // Add class "input-wrapper"
    this.renderer.addClass(divElement, 'input-wrapper');

    // Add the div, just before the input
    this.renderer.insertBefore(parent, divElement, this.el.nativeElement);

    // Remove the input
    this.renderer.removeChild(parent, this.el.nativeElement);

    // Remove the directive attribute (not really necessary, but just to be clean)
    this.renderer.removeAttribute(this.el.nativeElement, 'inputWrapper');

    // Re-add it inside the div
    this.renderer.appendChild(divElement, this.el.nativeElement);
    this.renderer.appendChild(divElement, this.spanElement);
  }

  private initSpan() {
    this.renderer.setStyle(this.spanElement, 'position', 'absolute');
    this.renderer.setStyle(this.spanElement, 'left', '0');
    this.renderer.setStyle(this.spanElement, 'right', '0');
    this.renderer.setStyle(this.spanElement, 'top', '0');
    this.renderer.setStyle(this.spanElement, 'bottom', '0');
    this.renderer.setStyle(this.spanElement, 'pointer-events', 'none');
    setTimeout(() => {
      this.renderer.setStyle(this.spanElement, 'width', this.el.nativeElement.offsetWidth + 'px');
    });

  }

  private show(errors) {
    this.renderer.setStyle(this.spanElement, 'display', errors ? 'block' : 'none');
    if (errors) {
      Object.keys(errors).some((key) => {
        switch (key) {
          case 'maxlength':
            this.changeText('Za długie masz to imię');
            return true;
          case 'required':
            this.changeText('Pole wymagane');
            return true;
          case 'diffrentPassword':
            this.changeText('Niepoprawne hasła');
            return true;
        }
      });
    }
  }

  changeText(text) {
    if (this.text) {
      this.renderer.removeChild(this.spanText, this.text);
    }
    this.text = this.renderer.createText(text);
    this.renderer.appendChild(this.spanText, this.text);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.renderer.setStyle(this.spanElement, 'width', this.el.nativeElement.offsetWidth + 'px');
  }

}
