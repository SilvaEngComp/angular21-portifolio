import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesComponent } from '@app/presentation/component/experiences/experiences';

describe('ExperiencesComponent', () => {
  let component: ExperiencesComponent;
  let fixture: ComponentFixture<ExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggle should expand an entry', () => {
    expect(component.isExpanded('capgemini')).toBe(false);
    component.toggle('capgemini');
    expect(component.isExpanded('capgemini')).toBe(true);
  });

  it('toggle should collapse an already expanded entry', () => {
    component.toggle('silva');
    expect(component.isExpanded('silva')).toBe(true);
    component.toggle('silva');
    expect(component.isExpanded('silva')).toBe(false);
  });

  it('isExpanded should return false for unknown id', () => {
    expect(component.isExpanded('unknown')).toBe(false);
  });

  it('multiple entries can be expanded independently', () => {
    component.toggle('capgemini');
    component.toggle('professor');
    expect(component.isExpanded('capgemini')).toBe(true);
    expect(component.isExpanded('professor')).toBe(true);
    expect(component.isExpanded('silva')).toBe(false);
  });
});
