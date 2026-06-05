import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stacks',
  imports: [MatListModule, MatDividerModule, MatIconModule],
  templateUrl: './stacks.html',
  styleUrl: './stacks.scss',
})
export class StacksComponent {}
