import { Component } from '@angular/core';
import { TranslatePipe } from '../../../i18n/translate.pipe';

@Component({
  selector: 'app-degrees',
  imports: [TranslatePipe],
  templateUrl: './degrees.html',
  styleUrl: './degrees.scss',
})
export class DegreesComponent {}
