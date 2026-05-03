import { Component } from '@angular/core';
import { TranslatePipe } from '../../../i18n/translate.pipe';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {}
