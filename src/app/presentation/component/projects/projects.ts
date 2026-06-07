import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../../i18n/translate.pipe';

export interface ProjectRepo {
  label: string;
  url: string;
}

export interface ProjectEntry {
  id: string;
  name: string;
  summary: string;
  stack: string[];
  icon: string;
  iconClass: string;
  repos: ProjectRepo[];
}

@Component({
  selector: 'app-projects',
  imports: [MatIconModule, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
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

  projects: ProjectEntry[] = [
    {
      id: 'exchange',
      name: 'Exchange Manager Platform',
      summary: 'Modernized a large-scale enterprise Exchange Manager built on Angular 8+ and Java/Spring Boot. Delivered 20% performance improvement, 75% reduction in feature delivery lead time, and 40% increase in activated function points through architecture refactoring and CI/CD pipeline optimization.',
      stack: ['Angular', 'Java', 'Spring Boot', 'Kafka', 'Docker', 'Azure', 'RxJS'],
      icon: 'currency_exchange',
      iconClass: 'proj-icon--platform',
      repos: [],
    },
    {
      id: 'pwa',
      name: 'Progressive Web Applications',
      summary: 'Built multi-platform PWAs for a church community app using Ionic v5/v6 and Angular 14+, with a Laravel 9 / PHP 8 backend. Integrated push notifications via Firebase GCP and deployed to AWS (EC2, S3, CloudFront).',
      stack: ['Ionic', 'Angular', 'Laravel', 'PHP', 'MySQL', 'Firebase', 'AWS'],
      icon: 'phone_android',
      iconClass: 'proj-icon--mobile',
      repos: [
        { label: 'commum_churche_app', url: 'https://github.com/SilvaEngComp/commum_churche_app/tree/main' },
      ],
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Microservices',
      summary: 'Designed and implemented a microservices-based e-commerce system split into independent services for clients, products, and orders. Each service owns its database and exposes RESTful APIs, following DDD and Clean Architecture principles.',
      stack: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'REST'],
      icon: 'shopping_cart',
      iconClass: 'proj-icon--commerce',
      repos: [
        { label: 'ms-clients', url: 'https://github.com/SilvaEngComp/ecommerce-ms-clients' },
        { label: 'ms-products', url: 'https://github.com/SilvaEngComp/ecommerce-ms-products' },
        { label: 'ms-orders', url: 'https://github.com/SilvaEngComp/ecommerce-ms-orders' },
      ],
    },
    {
      id: 'iot',
      name: 'IoT Reliability Framework (RFoT)',
      summary: "Master's thesis research: a framework combining IoT sensor data, blockchain smart contracts, and machine learning to validate and ensure the reliability of data sources in distributed IoT environments.",
      stack: ['Python', 'Blockchain', 'Smart Contracts', 'ML', 'IoT'],
      icon: 'sensors',
      iconClass: 'proj-icon--research',
      repos: [
        { label: 'RFoT', url: 'https://github.com/SilvaEngComp/RFoT' },
      ],
    },
    {
      id: 'chatbot',
      name: 'ChatBot Applications',
      summary: 'Full-stack chatbot solution with a conversational Ionic/Angular mobile app connected to a Laravel REST API backend. Integrates NLP services and third-party APIs to deliver intelligent, context-aware responses.',
      stack: ['Ionic', 'Angular', 'Laravel', 'PHP', 'REST'],
      icon: 'smart_toy',
      iconClass: 'proj-icon--ai',
      repos: [
        { label: 'chatBot_app_ionic', url: 'https://github.com/SilvaEngComp/chatBot_app_ionic' },
        { label: 'chatBot_api_laravel', url: 'https://github.com/SilvaEngComp/chatBot_api_laravel' },
      ],
    },
    {
      id: 'portfolio',
      name: 'Personal Portfolio',
      summary: 'This portfolio — built with Angular 21 standalone components, Angular Material, SCSS, and a custom i18n service (EN/PT). Features a timeline page layout, scroll-reveal animations, signal-based state, and a fully responsive mobile-first design.',
      stack: ['Angular 21', 'Angular Material', 'SCSS', 'TypeScript', 'Vitest'],
      icon: 'person',
      iconClass: 'proj-icon--portfolio',
      repos: [
        { label: 'angular21-portifolio', url: 'https://github.com/SilvaEngComp/angular21-portifolio' },
      ],
    },
    {
      id: 'invest',
      name: 'Invest API',
      summary: 'Investment management REST API built with Java and Spring Boot. Handles asset portfolios, transaction history, and financial calculations with secure JWT authentication, following Clean Architecture and SOLID principles.',
      stack: ['Java', 'Spring Boot', 'JWT', 'MySQL', 'REST'],
      icon: 'trending_up',
      iconClass: 'proj-icon--finance',
      repos: [
        { label: 'invest_api', url: 'https://github.com/SilvaEngComp/invest_api' },
        { label: 'enginy_invest', url: 'https://github.com/SilvaEngComp/enginy_invest' },
      ],
    },
  ];
}
