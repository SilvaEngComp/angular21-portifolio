import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../../i18n/translate.pipe';
import { ScrollRevealDirective } from '../../directive/scroll-reveal.directive';

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  date: string;
  summary: string;
  logo?: string;
  fallbackIcon: string;
}

@Component({
  selector: 'app-degrees',
  imports: [MatIconModule, TranslatePipe, ScrollRevealDirective],
  templateUrl: './degrees.html',
  styleUrl: './degrees.scss',
})
export class DegreesComponent {
  entries: EducationEntry[] = [
    {
      id: 'unipds',
      institution: 'degrees.unipds.institution',
      degree: 'degrees.unipds.degree',
      date: 'Nov 2025',
      summary: 'degrees.unipds.summary',
      logo: 'assets/icons/education/unipds.png',
      fallbackIcon: 'school',
    },
    {
      id: 'ufba',
      institution: 'degrees.ufba.institution',
      degree: 'degrees.ufba.degree',
      date: 'Jul 2021 — Nov 2024',
      summary: 'degrees.ufba.summary',
      logo: 'assets/icons/education/ufba.png',
      fallbackIcon: 'school',
    },
    {
      id: 'igti',
      institution: 'degrees.igti.institution',
      degree: 'degrees.igti.degree',
      date: 'Mar 2018 — Feb 2019',
      summary: 'degrees.igti.summary',
      logo: 'assets/icons/education/igti.png',
      fallbackIcon: 'security',
    },
    {
      id: 'ufrb',
      institution: 'degrees.ufrb.institution',
      degree: 'degrees.ufrb.degree',
      date: 'Feb 2013 — Aug 2018',
      summary: 'degrees.ufrb.summary',
      logo: 'assets/icons/education/ufrb.png',
      fallbackIcon: 'school',
    },
  ];
}
