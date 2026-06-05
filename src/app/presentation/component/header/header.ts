import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslatePipe } from '../../../i18n/translate.pipe';
import { TranslationService } from '../../../i18n/translation.service';
import { Locale } from '../../../i18n/translations';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSelectModule, MatFormFieldModule, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly translation = inject(TranslationService);

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

  onLanguageChange(locale: Locale): void {
    this.translation.setLanguage(locale);
  }
}

