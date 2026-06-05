import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Header } from '../../component/header/header';
import { AboutComponent } from '../../component/about/about';
import { PortraitComponent } from '../../component/portrait/portrait';
import { StacksComponent } from '../../component/stacks/stacks';
import { ExperiencesComponent } from '../../component/experiences/experiences';
import { DegreesComponent } from '../../component/degrees/degrees';
import { ProjectsComponent } from '../../component/projects/projects';
import { CertificationsComponent } from '../../component/certifications/certifications';
import { ContactComponent } from '../../component/contact/contact';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, Header, AboutComponent, PortraitComponent, StacksComponent, ExperiencesComponent, DegreesComponent, ProjectsComponent, CertificationsComponent, ContactComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
