import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-resume',
  imports: [MatListModule, MatDividerModule, MatIconModule],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class ResumeComponent {}
