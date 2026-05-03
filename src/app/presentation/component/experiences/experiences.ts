import { Component } from '@angular/core';
import { TranslatePipe } from '../../../i18n/translate.pipe';

@Component({
  selector: 'app-experiences',
  imports: [TranslatePipe],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class ExperiencesComponent {}
