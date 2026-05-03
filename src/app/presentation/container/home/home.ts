import { Component } from '@angular/core';
import { Header } from '../../component/header/header';
import { AboutComponent } from '../../component/about/about';
import { PortraitComponent } from '../../component/portrait/portrait';
import { StacksComponent } from '../../component/stacks/stacks';
import { ExperiencesComponent } from '../../component/experiences/experiences';
import { DegreesComponent } from '../../component/degrees/degrees';
import { ProjectsComponent } from '../../component/projects/projects';
import { ResumeComponent } from '../../component/resume/resume';

@Component({
  selector: 'app-home',
  imports: [Header, AboutComponent, PortraitComponent, StacksComponent, ExperiencesComponent, DegreesComponent, ProjectsComponent, ResumeComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
