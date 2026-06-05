import { Component, OnDestroy, OnInit, signal, computed } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-portrait',
  imports: [NgClass],
  templateUrl: './portrait.html',
  styleUrl: './portrait.scss',
})
export class PortraitComponent implements OnInit, OnDestroy {
  readonly images = [
    '/assets/images/portrait.jpg',
    '/assets/images/portrait2.jpg',
    '/assets/images/portrait3.jpg',
  ];

  currentIndex = signal(0);

  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex.update(i => (i + 1) % this.images.length);
    }, 3500);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
