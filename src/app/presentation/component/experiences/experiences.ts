import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslatePipe } from '../../../i18n/translate.pipe';

@Component({
  selector: 'app-experiences',
  imports: [MatExpansionModule, TranslatePipe],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class ExperiencesComponent {}
