import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPrimary } from '@app/presentation/component/btn-primary/btn-primary';

describe('BtnPrimary', () => {
  let component: BtnPrimary;
  let fixture: ComponentFixture<BtnPrimary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnPrimary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnPrimary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty text by default', () => {
    expect(component.text).toBe('');
  });

  it('should bind the text @Input', () => {
    fixture.componentRef.setInput('text', 'Download CV');
    fixture.detectChanges();
    expect(component.text).toBe('Download CV');
  });
});
