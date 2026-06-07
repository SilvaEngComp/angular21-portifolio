import { Component } from '@angular/core';
import { TranslatePipe } from '../../../i18n/translate.pipe';
import { PortraitComponent } from '../portrait/portrait';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe, PortraitComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {}
