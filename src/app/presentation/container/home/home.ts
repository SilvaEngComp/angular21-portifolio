import { Component, HostListener, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Header } from '../../component/header/header';
import { AboutComponent } from '../../component/about/about';
import { PortraitComponent } from '../../component/portrait/portrait';
import { StacksComponent } from '../../component/stacks/stacks';
import { ExperiencesComponent } from '../../component/experiences/experiences';
import { DegreesComponent } from '../../component/degrees/degrees';
import { ProjectsComponent } from '../../component/projects/projects';
import { CertificationsComponent } from '../../component/certifications/certifications';
import { ContactComponent } from '../../component/contact/contact';
import { ScrollRevealDirective } from '../../directive/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule, MatIconModule, Header, AboutComponent, PortraitComponent, StacksComponent, ExperiencesComponent, DegreesComponent, ProjectsComponent, CertificationsComponent, ContactComponent, ScrollRevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly showScrollTop = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.showScrollTop.set(window.scrollY > 300);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
