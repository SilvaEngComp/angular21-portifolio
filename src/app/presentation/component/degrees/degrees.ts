import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../../i18n/translate.pipe';

export interface EducationEntry {
  titleKey: string;
  line: string;
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
      titleKey: 'education.li_1',
      line: 'Advanced modern Java development and architecture (Spring Boot, Quarkus, Kafka, AWS, DevOps).',
      logo: 'assets/icons/education/unipds.png',
      fallbackIcon: 'school',
    },
    {
      titleKey: 'education.li_2',
      line: 'Framework integrating IoT devices, blockchain, smart contracts, and ML for data validation.',
      logo: 'assets/icons/education/ufba.png',
      fallbackIcon: 'school',
    },
    {
      titleKey: 'education.li_3',
      line: 'Advanced security strategies to enhance web application resilience.',
      logo: 'assets/icons/education/igti.png',
      fallbackIcon: 'security',
    },
    {
      titleKey: 'education.li_4',
      line: 'Stress level identification using ECG, signal processing, and ML.',
      logo: 'assets/icons/education/ufrb.png',
      fallbackIcon: 'school',
    },
  ];
}
