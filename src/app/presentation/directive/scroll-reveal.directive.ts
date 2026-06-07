import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[scrollReveal]',
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() scrollRevealDelay = 0;

  private readonly el = inject(ElementRef);
  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    const native: HTMLElement = this.el.nativeElement;
    native.classList.add('scroll-reveal');

    if (this.scrollRevealDelay) {
      native.style.transitionDelay = `${this.scrollRevealDelay}ms`;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          native.classList.add('scroll-reveal--visible');
          this.observer?.unobserve(native);
        }
      },
      { threshold: 0.1 }
    );

    this.observer.observe(native);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
