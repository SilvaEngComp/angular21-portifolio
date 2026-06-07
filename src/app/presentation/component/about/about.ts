import { Component } from '@angular/core';
import { TranslatePipe } from '../../../i18n/translate.pipe';
import { ScrollRevealDirective } from '../../directive/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe, ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {}
