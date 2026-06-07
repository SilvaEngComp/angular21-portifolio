import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreesComponent, EducationEntry } from '@app/presentation/component/degrees/degrees';

describe('DegreesComponent', () => {
  let component: DegreesComponent;
  let fixture: ComponentFixture<DegreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DegreesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DegreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 education entries', () => {
    expect(component.entries.length).toBe(4);
  });

  it('each entry should have required fields', () => {
    for (const entry of component.entries) {
      expect(entry.id).toBeTruthy();
      expect(entry.institution).toBeTruthy();
      expect(entry.degree).toBeTruthy();
      expect(entry.date).toBeTruthy();
      expect(entry.summary).toBeTruthy();
      expect(entry.fallbackIcon).toBeTruthy();
    }
  });

  it('all entries should have logo fields set', () => {
    const withLogo = component.entries.filter(e => e.logo);
    expect(withLogo.length).toBe(4);
  });

  it('entries should use i18n translation keys for institution', () => {
    const ids = component.entries.map(e => e.id);
    expect(ids).toEqual(['unipds', 'ufba', 'igti', 'ufrb']);

    for (const entry of component.entries) {
      expect(entry.institution).toBe(`degrees.${entry.id}.institution`);
      expect(entry.degree).toBe(`degrees.${entry.id}.degree`);
      expect(entry.summary).toBe(`degrees.${entry.id}.summary`);
    }
  });

  it('unipds entry should have correct date and fallbackIcon', () => {
    const entry = component.entries.find(e => e.id === 'unipds') as EducationEntry;
    expect(entry.date).toBe('Nov 2025');
    expect(entry.fallbackIcon).toBe('school');
    expect(entry.logo).toBe('assets/icons/education/unipds.png');
  });

  it('ufba entry should have correct date (master dissertation)', () => {
    const entry = component.entries.find(e => e.id === 'ufba') as EducationEntry;
    expect(entry.date).toBe('Jul 2021 — Nov 2024');
    expect(entry.fallbackIcon).toBe('school');
    expect(entry.logo).toBe('assets/icons/education/ufba.png');
  });

  it('igti entry should use security fallbackIcon', () => {
    const entry = component.entries.find(e => e.id === 'igti') as EducationEntry;
    expect(entry.fallbackIcon).toBe('security');
    expect(entry.date).toBe('Mar 2018 — Feb 2019');
    expect(entry.logo).toBe('assets/icons/education/igti.png');
  });

  it('ufrb entry should have correct date (bachelor tcc)', () => {
    const entry = component.entries.find(e => e.id === 'ufrb') as EducationEntry;
    expect(entry.date).toBe('Feb 2013 — Aug 2018');
    expect(entry.fallbackIcon).toBe('school');
    expect(entry.logo).toBe('assets/icons/education/ufrb.png');
  });
});
