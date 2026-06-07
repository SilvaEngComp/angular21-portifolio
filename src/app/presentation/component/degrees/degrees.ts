import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../../i18n/translate.pipe';

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
  imports: [MatIconModule, TranslatePipe],
  templateUrl: './degrees.html',
  styleUrl: './degrees.scss',
})
export class DegreesComponent {
  entries: EducationEntry[] = [
    {
      id: 'unipds',
      institution: 'UNIPDS Educação',
      degree: 'Postgraduate · Java Elite',
      date: 'Nov 2025',
      summary: 'Advanced modern Java development and architecture — Spring Boot, Quarkus, Kafka, AWS, and DevOps practices.',
      logo: 'assets/icons/education/unipds.png',
      fallbackIcon: 'school',
    },
    {
      id: 'ufba',
      institution: 'Federal University of Bahia',
      degree: "Master's · Computer Science",
      date: 'Jul 2021 — Nov 2024',
      summary: 'Research on a framework integrating IoT devices, blockchain, smart contracts, and ML for reliable data validation.',
      logo: 'assets/icons/education/ufba.png',
      fallbackIcon: 'school',
    },
    {
      id: 'igti',
      institution: 'IGTI — Information & Management Technology Institute',
      degree: 'MBA · Cyber Security',
      date: 'Mar 2018 — Feb 2019',
      summary: 'Advanced security strategies to enhance web application resilience against modern threats.',
      logo: 'assets/icons/education/igti.png',
      fallbackIcon: 'security',
    },
    {
      id: 'ufrb',
      institution: 'Federal University of Recôncavo da Bahia',
      degree: 'Bachelor · Computer Engineering',
      date: 'Feb 2013 — Aug 2018',
      summary: 'Thesis: stress level identification using ECG signal processing and machine learning algorithms.',
      logo: 'assets/icons/education/ufrb.png',
      fallbackIcon: 'school',
    },
  ];
}
