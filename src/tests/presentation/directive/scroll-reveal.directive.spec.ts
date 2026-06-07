import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { ScrollRevealDirective } from '@app/presentation/directive/scroll-reveal.directive';

@Component({
  template: '<div scrollReveal></div>',
  imports: [ScrollRevealDirective],
})
class TestHostComponent {}

describe('ScrollRevealDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let mockObserve: ReturnType<typeof vi.fn>;
  let mockDisconnect: ReturnType<typeof vi.fn>;
  let mockUnobserve: ReturnType<typeof vi.fn>;
  let capturedCallback: IntersectionObserverCallback;

  beforeAll(() => {
    mockObserve = vi.fn();
    mockDisconnect = vi.fn();
    mockUnobserve = vi.fn();

    function IntersectionObserverMock(cb: IntersectionObserverCallback) {
      capturedCallback = cb;
      return { observe: mockObserve, unobserve: mockUnobserve, disconnect: mockDisconnect };
    }
    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
    // Make rAF synchronous so afterNextRender(() => rAF(() => setup)) runs in tests
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => { cb(0); return 0; });
  });

  afterAll(() => {
    vi.unstubAllGlobals();
  });

  beforeEach(async () => {
    mockObserve.mockClear();
    mockDisconnect.mockClear();
    mockUnobserve.mockClear();

    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should add scroll-reveal class on init', () => {
    const el: HTMLElement = fixture.nativeElement.querySelector('[scrollReveal]');
    expect(el.classList.contains('scroll-reveal')).toBe(true);
  });

  it('should call observe on the host element', () => {
    expect(mockObserve).toHaveBeenCalled();
  });

  it('should add scroll-reveal--visible and call unobserve when entry is intersecting', () => {
    const el: HTMLElement = fixture.nativeElement.querySelector('[scrollReveal]');
    capturedCallback(
      [{ isIntersecting: true, target: el } as unknown as IntersectionObserverEntry],
      {} as IntersectionObserver
    );
    expect(el.classList.contains('scroll-reveal--visible')).toBe(true);
    expect(mockUnobserve).toHaveBeenCalledWith(el);
  });

  it('should not add scroll-reveal--visible when entry is not intersecting', () => {
    const el: HTMLElement = fixture.nativeElement.querySelector('[scrollReveal]');
    capturedCallback(
      [{ isIntersecting: false, target: el } as unknown as IntersectionObserverEntry],
      {} as IntersectionObserver
    );
    expect(el.classList.contains('scroll-reveal--visible')).toBe(false);
  });

  it('should call disconnect on destroy', () => {
    fixture.destroy();
    expect(mockDisconnect).toHaveBeenCalled();
  });
});
