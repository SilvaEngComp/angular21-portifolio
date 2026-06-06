import { Component, inject, computed, signal, HostListener, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { TranslatePipe } from '../../../i18n/translate.pipe';
import { TranslationService } from '../../../i18n/translation.service';
import { Locale } from '../../../i18n/translations';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSelectModule, MatFormFieldModule, MatMenuModule, MatDividerModule, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly translation = inject(TranslationService);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  readonly isMobile = signal(
    isPlatformBrowser(this.platformId) ? window.innerWidth < 500 : false
  );

  @HostListener('window:resize')
  onResize(): void {
    this.isMobile.set(window.innerWidth < 500);
  }

  readonly languages: { locale: Locale; icon: string; label: string }[] = [
    {
      locale: 'en',
      icon: 'assets/icons/icons8-emoji-dos-estados-unidos-50.png',
      label: 'English',
    },
    {
      locale: 'pt',
      icon: 'assets/icons/icons8-brasil-emoji-50.png',
      label: 'Português',
    },
  ];

  readonly cvUrl = computed(() =>
    this.translation.currentLang() === 'pt'
      ? 'assets/documents/CV-EliabeSilva-Fullstak - PT.pdf'
      : 'assets/documents/CV-EliabeSilva-Fullstak - EN.pdf'
  );

  onLanguageChange(locale: Locale): void {
    this.translation.setLanguage(locale);
  }

  scrollTo(sectionId: string): void {
    const el = this.document.getElementById(sectionId);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    el.classList.remove('section-flash');
    // Force reflow so removing then adding restarts the animation
    void el.offsetWidth;
    el.classList.add('section-flash');
    el.addEventListener('animationend', () => el.classList.remove('section-flash'), { once: true });
  }
}

