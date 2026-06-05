import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MainAnimation } from '../main-animation/main-animation';
import { BtnPrimary } from '../btn-primary/btn-primary';

@Component({
  selector: 'main-section',
  imports: [MainAnimation, BtnPrimary, MatButtonModule],
  templateUrl: './main-section.html',
  styleUrl: './main-section.scss',
})
export class MainSection {}
