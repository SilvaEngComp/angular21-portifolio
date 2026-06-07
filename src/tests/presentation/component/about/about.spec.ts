import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { AboutComponent } from '@app/presentation/component/about/about';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    vi.useFakeTimers();
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    vi.useRealTimers();
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 slides', () => {
    expect(component.slides.length).toBe(5);
  });

  it('should start at slide index 0 and visible', () => {
    expect(component.currentSlideIndex()).toBe(0);
    expect(component.isVisible()).toBe(true);
  });

  it('goToSlide should fade out, update index, and fade back in', () => {
    component.goToSlide(2);
    expect(component.isVisible()).toBe(false);

    vi.advanceTimersByTime(320);
    expect(component.currentSlideIndex()).toBe(2);
    expect(component.isVisible()).toBe(true);
  });

  it('goToSlide should do nothing if same index is passed', () => {
    component.goToSlide(0);
    expect(component.isVisible()).toBe(true);
    expect(component.currentSlideIndex()).toBe(0);
  });

  it('should auto-advance slide every 3500ms', () => {
    vi.advanceTimersByTime(3500);
    expect(component.isVisible()).toBe(false);

    vi.advanceTimersByTime(320);
    expect(component.currentSlideIndex()).toBe(1);
    expect(component.isVisible()).toBe(true);
  });

  it('should cycle back to slide 0 after the last slide', () => {
    component.goToSlide(4);
    vi.advanceTimersByTime(320);

    vi.advanceTimersByTime(3500);
    vi.advanceTimersByTime(320);

    expect(component.currentSlideIndex()).toBe(0);
  });

  it('each slide should have eyebrow and title translation keys', () => {
    for (const slide of component.slides) {
      expect(slide.eyebrow).toBeTruthy();
      expect(slide.title).toBeTruthy();
    }
  });

  it('ngOnDestroy should not throw when called before ngOnInit sets interval', () => {
    (component as any).intervalId = null;
    expect(() => component.ngOnDestroy()).not.toThrow();
  });
});
