import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stacks',
  imports: [MatExpansionModule, MatIconModule],
  templateUrl: './stacks.html',
  styleUrl: './stacks.scss',
})
export class StacksComponent {}
