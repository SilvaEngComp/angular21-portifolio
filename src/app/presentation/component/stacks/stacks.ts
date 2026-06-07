import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export interface StackItem {
  name: string;
  iconUrl: string;
  years?: string;
}

export interface StackCategory {
  id: string;
  label: string;
  icon: string;
  iconClass: string;
  items: StackItem[];
}

@Component({
  selector: 'app-stacks',
  imports: [MatIconModule],
  templateUrl: './stacks.html',
  styleUrl: './stacks.scss',
})
export class StacksComponent {
  categories: StackCategory[] = [
    {
      id: 'frontend',
      label: 'Frontend',
      icon: 'computer',
      iconClass: 'cat-icon--frontend',
      items: [
        { name: 'Angular', iconUrl: 'https://cdn.simpleicons.org/angular', years: '6 yrs' },
        { name: 'TypeScript', iconUrl: 'https://cdn.simpleicons.org/typescript', years: '6 yrs' },
        { name: 'JavaScript', iconUrl: 'https://cdn.simpleicons.org/javascript', years: '7 yrs' },
        { name: 'RxJS', iconUrl: 'https://cdn.simpleicons.org/reactivex', years: '5 yrs' },
        { name: 'HTML', iconUrl: 'https://cdn.simpleicons.org/html5', years: '10 yrs' },
        { name: 'SCSS', iconUrl: 'https://cdn.simpleicons.org/sass', years: '10 yrs' },
        { name: 'Ionic', iconUrl: 'https://cdn.simpleicons.org/ionic', years: '5 yrs' },
        { name: 'NgRx', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ngrx/ngrx-original.svg', years: '1 yr' },
        { name: 'Angular Material', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularmaterial/angularmaterial-original.svg', years: '1 yr' },
        { name: 'Bootstrap', iconUrl: 'https://cdn.simpleicons.org/bootstrap', years: '6 yrs' },
        { name: 'Chart.js', iconUrl: 'https://cdn.simpleicons.org/chartdotjs', years: '5 yrs' },
      ],
    },
    {
      id: 'backend',
      label: 'Backend',
      icon: 'dns',
      iconClass: 'cat-icon--backend',
      items: [
        { name: 'Java', iconUrl: 'https://cdn.simpleicons.org/openjdk', years: '10 yrs' },
        { name: 'Spring Boot', iconUrl: 'https://cdn.simpleicons.org/springboot', years: '5 yrs' },
        { name: 'RESTful APIs', iconUrl: 'https://cdn.simpleicons.org/openapiinitiative', years: '5 yrs' },
        { name: 'MariaDB / MySQL', iconUrl: 'https://cdn.simpleicons.org/mysql', years: '10 yrs' },
        { name: 'MongoDB', iconUrl: 'https://cdn.simpleicons.org/mongodb', years: '1 yr' },
        { name: 'Kafka', iconUrl: 'https://cdn.simpleicons.org/apachekafka', years: '1 yr' },
        { name: 'Laravel / PHP', iconUrl: 'https://cdn.simpleicons.org/laravel', years: '3 yrs' },
      ],
    },
    {
      id: 'devops',
      label: 'DevOps / Cloud',
      icon: 'cloud',
      iconClass: 'cat-icon--devops',
      items: [
        { name: 'Azure', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg', years: '2 yrs' },
        { name: 'GCP', iconUrl: 'https://cdn.simpleicons.org/googlecloud', years: '4 yrs' },
        { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', years: '1 yr' },
        { name: 'Docker', iconUrl: 'https://cdn.simpleicons.org/docker', years: '3 yrs' },
        { name: 'Kubernetes', iconUrl: 'https://cdn.simpleicons.org/kubernetes', years: '1 yr' },
        { name: 'GitHub Actions', iconUrl: 'https://cdn.simpleicons.org/githubactions', years: '3 yrs' },
      ],
    },
    {
      id: 'testing',
      label: 'Testing / Quality',
      icon: 'verified',
      iconClass: 'cat-icon--testing',
      items: [
        { name: 'JUnit', iconUrl: 'https://cdn.simpleicons.org/junit5' },
        { name: 'Jest', iconUrl: 'https://cdn.simpleicons.org/jest' },
        { name: 'Vitest', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg' },
        { name: 'Jasmine', iconUrl: 'https://cdn.simpleicons.org/jasmine' },
        { name: 'Postman', iconUrl: 'https://cdn.simpleicons.org/postman' },
        { name: 'Cucumber / Gherkin', iconUrl: 'https://cdn.simpleicons.org/cucumber' },
        { name: 'Selenium', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg' },
        { name: 'Playwright', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg' },
      ],
    },
    {
      id: 'observability',
      label: 'Observability',
      icon: 'monitor_heart',
      iconClass: 'cat-icon--observability',
      items: [
        { name: 'Dynatrace', iconUrl: 'https://cdn.simpleicons.org/dynatrace', years: '2 yrs' },
        { name: 'Argo', iconUrl: 'https://cdn.simpleicons.org/argo', years: '2 yrs' },
        { name: 'Grafana', iconUrl: 'https://cdn.simpleicons.org/grafana', years: '1 yr' },
        { name: 'Spring Actuator', iconUrl: 'https://cdn.simpleicons.org/spring', years: '2 yrs' },
      ],
    },
    {
      id: 'tools',
      label: 'Tools',
      icon: 'build',
      iconClass: 'cat-icon--tools',
      items: [
        { name: 'GitHub', iconUrl: 'https://cdn.simpleicons.org/github/ffffff' },
        { name: 'GitLab', iconUrl: 'https://cdn.simpleicons.org/gitlab' },
        { name: 'Bitbucket', iconUrl: 'https://cdn.simpleicons.org/bitbucket' },
        { name: 'Jira', iconUrl: 'https://cdn.simpleicons.org/jira' },
        { name: 'Confluence', iconUrl: 'https://cdn.simpleicons.org/confluence' },
        { name: 'Figma', iconUrl: 'https://cdn.simpleicons.org/figma' },
        { name: 'GitHub Copilot', iconUrl: 'https://cdn.simpleicons.org/githubcopilot/ffffff' },
      ],
    },
  ];
}
