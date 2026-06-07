import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '../../../i18n/translate.pipe';
import { ScrollRevealDirective } from '../../directive/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [MatIconModule, MatButtonModule, TranslatePipe, ScrollRevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {}
