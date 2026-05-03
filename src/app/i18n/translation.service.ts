import { Injectable, signal } from '@angular/core';
import { Locale, TRANSLATIONS } from './translations';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  readonly currentLang = signal<Locale>('en');

  setLanguage(lang: Locale) {
    if (lang !== this.currentLang()) {
      this.currentLang.set(lang);
    }
  }

  translate(key: string): string {
    const lang = this.currentLang();
    return TRANSLATIONS[key]?.[lang] ?? key;
  }
}
