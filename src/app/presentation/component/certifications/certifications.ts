import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export interface CertEntry {
  id: string;
  name: string;
  year?: string;
  inProgress: boolean;
}

export interface LanguageEntry {
  name: string;
  level: string;
  flag: string;
}

@Component({
  selector: 'app-certifications',
  imports: [MatIconModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class CertificationsComponent {
  certs: CertEntry[] = [
    { id: 'gh300',       name: 'GitHub GH-300',                                                      inProgress: true  },
    { id: 'spring',      name: 'Spring Certified Professional 2024 — 2V0-72.22',                     inProgress: true  },
    { id: 'oracle808',   name: 'Oracle Certified Associate, Java SE 8 Programmer — 1Z0-808', year: '2026', inProgress: false },
    { id: 'oracle811',   name: 'Oracle Java Certified Foundations Associate — 1Z0-811',      year: '2026', inProgress: false },
    { id: 'aspiring',    name: 'Aspiring Architecture — L0',                                year: '2025', inProgress: false },
    { id: 'az900',       name: 'Microsoft Azure Fundamentals — AZ-900',                    year: '2023', inProgress: false },
  ];

  languages: LanguageEntry[] = [
    { name: 'Portuguese', level: 'Native', flag: '🇧🇷' },
    { name: 'English',    level: 'B2',     flag: '🇺🇸' },
    { name: 'Spanish',    level: 'A1',     flag: '🇪🇸' },
  ];
}
