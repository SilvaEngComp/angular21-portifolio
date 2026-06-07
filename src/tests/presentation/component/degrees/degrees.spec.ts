import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreesComponent } from '@app/presentation/component/degrees/degrees';

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

  it('each entry should have titleKey, line and fallbackIcon', () => {
    for (const entry of component.entries) {
      expect(entry.titleKey).toBeTruthy();
      expect(entry.line).toBeTruthy();
      expect(entry.fallbackIcon).toBeTruthy();
    }
  });

  it('entries should have optional logo fields set', () => {
    const withLogo = component.entries.filter(e => e.logo);
    expect(withLogo.length).toBeGreaterThan(0);
  });
});
