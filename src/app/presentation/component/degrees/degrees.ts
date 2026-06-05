import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../../i18n/translate.pipe';

@Component({
  selector: 'app-degrees',
  imports: [MatListModule, MatDividerModule, MatIconModule, TranslatePipe],
  templateUrl: './degrees.html',
  styleUrl: './degrees.scss',
})
export class DegreesComponent {}
