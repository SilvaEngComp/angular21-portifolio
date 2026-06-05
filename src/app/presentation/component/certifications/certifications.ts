import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-certifications',
  imports: [MatListModule, MatDividerModule, MatIconModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class CertificationsComponent {}
