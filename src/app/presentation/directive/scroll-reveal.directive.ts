import { Directive, ElementRef, Input, OnDestroy, OnInit, afterNextRender, inject } from '@angular/core';

@Directive({
  selector: '[scrollReveal]',
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() scrollRevealDelay = 0;
  @Input() scrollRevealAnimation = 'fadeInUp';

  private readonly el = inject(ElementRef);
  private observer: IntersectionObserver | null = null;

  constructor() {
    // Defer observer setup until after the first render + browser layout,
    // so that elements have their final positions (below the fold).
    //
    // afterNextRender fires after Angular's change-detection cycle, but the
    // browser may not have completed CSS layout yet — elements temporarily sit
    // at y=0, causing IntersectionObserver to fire for every element (all appear
    // "in viewport") and skip the animation.
    //
    // A requestAnimationFrame inside afterNextRender guarantees we wait for at
    // least one complete browser layout/paint frame before observing, so only
    // truly in-viewport elements fire immediately; below-fold elements wait for
    // the user to scroll.
    afterNextRender(() => {
      requestAnimationFrame(() => this.setupObserver());
    });
  }

  ngOnInit(): void {
    // Hide the element initially so it doesn't flash before the animation starts.
    // Using inline opacity so it takes effect regardless of stylesheet load order.
    const native: HTMLElement = this.el.nativeElement;
    native.style.opacity = '0';

    if (this.scrollRevealDelay) {
      native.style.animationDelay = `${this.scrollRevealDelay}ms`;
    }

    console.log(`[ScrollReveal] registered — animation: animate__${this.scrollRevealAnimation}, delay: ${this.scrollRevealDelay}ms`, native);
  }

  private setupObserver(): void {
    const native: HTMLElement = this.el.nativeElement;

    console.log(`[ScrollReveal] observing`, native);

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Remove inline opacity hide and trigger the animate.css entrance animation.
          native.style.opacity = '';
          native.classList.add('animate__animated', `animate__${this.scrollRevealAnimation}`);
          console.log(`[ScrollReveal] triggered — animate__${this.scrollRevealAnimation}`, native);
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
