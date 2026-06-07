import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { TranslatePipe } from '../../../i18n/translate.pipe';
import { ScrollRevealDirective } from '../../directive/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe, ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent implements OnInit, OnDestroy {
  readonly slides = [
    { eyebrow: 'about.slide1.eyebrow', title: 'about.slide1.title' },
    { eyebrow: 'about.slide2.eyebrow', title: 'about.slide2.title' },
    { eyebrow: 'about.slide3.eyebrow', title: 'about.slide3.title' },
    { eyebrow: 'about.slide4.eyebrow', title: 'about.slide4.title' },
    { eyebrow: 'about.slide5.eyebrow', title: 'about.slide5.title' },
  ];

  readonly currentSlideIndex = signal(0);
  readonly isVisible = signal(true);

  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.intervalId = setInterval(() => this.advance(), 3500);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  goToSlide(index: number): void {
    if (index === this.currentSlideIndex()) return;
    this.transition(() => this.currentSlideIndex.set(index));
  }

  private advance(): void {
    this.transition(() =>
      this.currentSlideIndex.update(i => (i + 1) % this.slides.length)
    );
  }

  private transition(updateFn: () => void): void {
    this.isVisible.set(false);
    setTimeout(() => {
      updateFn();
      this.isVisible.set(true);
    }, 320);
  }
}

