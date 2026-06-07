import { Directive, ElementRef, Input, OnDestroy, OnInit, afterNextRender, inject } from '@angular/core';

@Directive({
  selector: '[scrollReveal]',
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() scrollRevealDelay = 0;

  private readonly el = inject(ElementRef);
  private observer: IntersectionObserver | null = null;

  constructor() {
    // Defer observer setup until after the first render + browser layout,
    // so that elements have their final positions (below the fold).
    // In production builds all components initialise synchronously in one
    // render tick; setting up IntersectionObserver in ngOnInit causes it to
    // fire immediately (all elements are temporarily at y=0), marking every
    // section as visible before the layout settles — breaking the animation.
    afterNextRender(() => {
      this.setupObserver();
    });
  }

  ngOnInit(): void {
    // Apply the hidden state synchronously so there is no flash of content
    // before the observer takes over.
    const native: HTMLElement = this.el.nativeElement;
    native.classList.add('scroll-reveal');

    if (this.scrollRevealDelay) {
      native.style.transitionDelay = `${this.scrollRevealDelay}ms`;
    }
  }

  private setupObserver(): void {
    const native: HTMLElement = this.el.nativeElement;

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
