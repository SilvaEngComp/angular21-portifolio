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
    // Defer observer setup until after Angular's DOM write phase completes.
    // afterNextRender fires after change detection + browser layout, so elements
    // already have their final positions — no extra requestAnimationFrame needed.
    // Using a single RAF per instance was causing all N directive instances to
    // flood the same animation frame (71ms violation when many elements exist).
    afterNextRender(() => {
      this.setupObserver();
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

  }

  private setupObserver(): void {
    const native: HTMLElement = this.el.nativeElement;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Remove inline opacity hide and trigger the animate.css entrance animation.
          native.style.opacity = '';
          native.classList.add('animate__animated', `animate__${this.scrollRevealAnimation}`);
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
