import { Component, HostListener, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Header } from '../../component/header/header';
import { AboutComponent } from '../../component/about/about';
import { StacksComponent } from '../../component/stacks/stacks';
import { ExperiencesComponent } from '../../component/experiences/experiences';
import { DegreesComponent } from '../../component/degrees/degrees';
import { ProjectsComponent } from '../../component/projects/projects';
import { CertificationsComponent } from '../../component/certifications/certifications';
import { ContactComponent } from '../../component/contact/contact';
import { ScrollRevealDirective } from '../../directive/scroll-reveal.directive';
import { TranslatePipe } from '../../../i18n/translate.pipe';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatIconModule, Header, AboutComponent, StacksComponent, ExperiencesComponent, DegreesComponent, ProjectsComponent, CertificationsComponent, ContactComponent, ScrollRevealDirective, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  readonly showScrollTop = signal(false);
  readonly activeChapter = signal('chapter-hero');

  readonly chapters = [
    { id: 'chapter-hero',           label: 'nav.home' },
    { id: 'chapter-experiences',    label: 'nav.experiences' },
    { id: 'chapter-education',      label: 'nav.about' },
    { id: 'chapter-projects',       label: 'nav.projects' },
    { id: 'chapter-skills',         label: 'nav.skills' },
    { id: 'chapter-certifications', label: 'nav.certifications' },
    { id: 'chapter-contact',        label: 'nav.contact' },
  ];

  private chapterObserver: IntersectionObserver | null = null;
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.chapterObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.activeChapter.set(entry.target.id);
            }
          }
        },
        { threshold: 0.3 }
      );
      setTimeout(() => {
        this.chapters.forEach(({ id }) => {
          const el = document.getElementById(id);
          if (el) this.chapterObserver?.observe(el);
        });
      }, 100);
    }
  }

  ngOnDestroy(): void {
    this.chapterObserver?.disconnect();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.showScrollTop.set(window.scrollY > 300);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToChapter(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
