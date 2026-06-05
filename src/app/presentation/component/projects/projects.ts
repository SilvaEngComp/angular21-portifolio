import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TranslatePipe } from '../../../i18n/translate.pipe';

@Component({
  selector: 'app-projects',
  imports: [MatCardModule, MatButtonModule, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {}
