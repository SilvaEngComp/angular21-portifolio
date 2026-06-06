import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../../i18n/translate.pipe';

@Component({
  selector: 'app-projects',
  imports: [MatCardModule, MatButtonModule, MatExpansionModule, MatChipsModule, MatIconModule, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {}
