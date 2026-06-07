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
    // Apply the hidden state via inline styles so it takes effect immediately,
    // independent of whether the global stylesheet has been parsed yet.
    // Angular's production build defers the global CSS asynchronously via
    // Beasties (critical CSS inlining), meaning class-based styles may not be
    // available when IntersectionObserver fires — causing all elements to appear
    // "intersecting" and skip the animation. Inline styles bypass this race.
    const native: HTMLElement = this.el.nativeElement;
    native.classList.add('scroll-reveal');
    native.style.opacity = '0';
    native.style.transform = 'translateY(32px)';
    native.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

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
          native.style.opacity = '1';
          native.style.transform = 'translateY(0)';
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
