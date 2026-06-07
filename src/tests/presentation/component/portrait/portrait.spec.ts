import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { PortraitComponent } from '@app/presentation/component/portrait/portrait';

describe('PortraitComponent', () => {
  let component: PortraitComponent;
  let fixture: ComponentFixture<PortraitComponent>;

  beforeEach(async () => {
    vi.useFakeTimers({ toFake: ['setInterval', 'clearInterval'] });

    await TestBed.configureTestingModule({
      imports: [PortraitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
    vi.useRealTimers();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with currentIndex 0', () => {
    expect(component.currentIndex()).toBe(0);
  });

  it('should have 3 images', () => {
    expect(component.images.length).toBe(3);
  });

  it('should advance index to 1 after 3500ms', () => {
    vi.advanceTimersByTime(3500);
    expect(component.currentIndex()).toBe(1);
  });

  it('should advance index to 2 after 7000ms', () => {
    vi.advanceTimersByTime(7000);
    expect(component.currentIndex()).toBe(2);
  });

  it('should cycle back to 0 after all 3 images', () => {
    vi.advanceTimersByTime(3500 * 3);
    expect(component.currentIndex()).toBe(0);
  });

  it('should stop advancing index after component is destroyed', () => {
    vi.advanceTimersByTime(3500);
    expect(component.currentIndex()).toBe(1);
    fixture.destroy();
    vi.advanceTimersByTime(3500);
    // Index stays at 1 because interval was cleared
    expect(component.currentIndex()).toBe(1);
  });

  it('should handle ngOnDestroy gracefully when intervalId is null', () => {
    (component as any).intervalId = null;
    expect(() => component.ngOnDestroy()).not.toThrow();
  });
});
