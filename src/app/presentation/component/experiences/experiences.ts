import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '../../../i18n/translate.pipe';

@Component({
  selector: 'app-experiences',
  imports: [MatIconModule, MatButtonModule, TranslatePipe],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class ExperiencesComponent {
  private expanded = signal<Set<string>>(new Set());

  toggle(id: string): void {
    this.expanded.update(s => {
      const next = new Set(s);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  isExpanded(id: string): boolean {
    return this.expanded().has(id);
  }
}
