import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from '@app/presentation/component/projects/projects';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 7 projects', () => {
    expect(component.projects.length).toBe(7);
  });

  it('toggle should expand a project', () => {
    expect(component.isExpanded('exchange')).toBe(false);
    component.toggle('exchange');
    expect(component.isExpanded('exchange')).toBe(true);
  });

  it('toggle should collapse an already expanded project', () => {
    component.toggle('pwa');
    expect(component.isExpanded('pwa')).toBe(true);
    component.toggle('pwa');
    expect(component.isExpanded('pwa')).toBe(false);
  });

  it('isExpanded should return false for unknown id', () => {
    expect(component.isExpanded('nonexistent')).toBe(false);
  });

  it('each project should have id, name, summary, stack, icon and repos', () => {
    for (const project of component.projects) {
      expect(project.id).toBeTruthy();
      expect(project.name).toBeTruthy();
      expect(project.summary).toBeTruthy();
      expect(project.stack.length).toBeGreaterThan(0);
      expect(project.icon).toBeTruthy();
      expect(Array.isArray(project.repos)).toBe(true);
    }
  });
});
