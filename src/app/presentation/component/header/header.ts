import { Component } from '@angular/core';
import { BtnPrimary } from '../btn-primary/btn-primary';
import { TranslatePipe } from '../../../i18n/translate.pipe';
import { TranslationService } from '../../../i18n/translation.service';

@Component({
  selector: 'app-header',
  imports: [BtnPrimary, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(public translation: TranslationService) {}
}

