import { Component } from '@angular/core';
import { TranslatePipe } from '../../../i18n/translate.pipe';

@Component({
  selector: 'app-resume',
  imports: [TranslatePipe],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class ResumeComponent {}
