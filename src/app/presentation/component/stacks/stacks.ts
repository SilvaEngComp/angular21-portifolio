import { Component } from '@angular/core';
import { TranslatePipe } from '../../../i18n/translate.pipe';

@Component({
  selector: 'app-stacks',
  imports: [TranslatePipe],
  templateUrl: './stacks.html',
  styleUrl: './stacks.scss',
})
export class StacksComponent {}
