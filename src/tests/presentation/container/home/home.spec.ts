import { Home } from './../../../../app/presentation/container/home/home';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { vi } from 'vitest';


describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeAll(() => {
    function IntersectionObserverMock() {
      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      };
    }
    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
  });

  afterAll(() => {
    vi.unstubAllGlobals();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have showScrollTop as false initially', () => {
    expect(component.showScrollTop()).toBe(false);
  });

  it('should set showScrollTop true when scrollY > 300', () => {
    Object.defineProperty(window, 'scrollY', { get: () => 400, configurable: true });
    component.onScroll();
    expect(component.showScrollTop()).toBe(true);
  });

  it('should set showScrollTop false when scrollY <= 300', () => {
    Object.defineProperty(window, 'scrollY', { get: () => 100, configurable: true });
    component.onScroll();
    expect(component.showScrollTop()).toBe(false);
  });

  it('should call window.scrollTo when scrollToTop is called', () => {
    const spy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    component.scrollToTop();
    expect(spy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('should trigger onScroll via window scroll event', () => {
    Object.defineProperty(window, 'scrollY', { get: () => 500, configurable: true });
    window.dispatchEvent(new Event('scroll'));
    expect(component.showScrollTop()).toBe(true);
  });

  it('scrollToChapter should call scrollIntoView when element exists', () => {
    const scrollIntoViewMock = vi.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

    const el = document.createElement('div');
    el.id = 'chapter-hero';
    document.body.appendChild(el);

    component.scrollToChapter('chapter-hero');

    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
    document.body.removeChild(el);
  });

  it('scrollToChapter should not throw when element does not exist', () => {
    expect(() => component.scrollToChapter('does-not-exist')).not.toThrow();
  });

  it('ngOnInit should call observe for each chapter element found in DOM', () => {
    const observeSpy = vi.fn();

    class LocalMockIO {
      observe = observeSpy;
      unobserve = vi.fn();
      disconnect = vi.fn();
      constructor(_cb: IntersectionObserverCallback) {}
    }

    vi.useFakeTimers();
    vi.stubGlobal('IntersectionObserver', LocalMockIO);

    const elements = component.chapters.map(({ id }) => {
      const el = document.createElement('section');
      el.id = id;
      document.body.appendChild(el);
      return el;
    });

    try {
      component.ngOnInit();
      vi.advanceTimersByTime(200);
      expect(observeSpy).toHaveBeenCalledTimes(component.chapters.length);
    } finally {
      elements.forEach(el => document.body.removeChild(el));
      vi.useRealTimers();
    }
  });

  it('ngOnInit should not call observe when chapter elements are absent from DOM', () => {
    const observeSpy = vi.fn();

    class LocalMockIO {
      observe = observeSpy;
      unobserve = vi.fn();
      disconnect = vi.fn();
      constructor(_cb: IntersectionObserverCallback) {}
    }

    vi.useFakeTimers();
    vi.stubGlobal('IntersectionObserver', LocalMockIO);
    const getElSpy = vi.spyOn(document, 'getElementById').mockReturnValue(null);

    try {
      component.ngOnInit();
      vi.advanceTimersByTime(200);
      expect(observeSpy).not.toHaveBeenCalled();
    } finally {
      getElSpy.mockRestore();
      vi.useRealTimers();
    }
  });

  it('ngOnInit IntersectionObserver callback sets activeChapter when intersecting', () => {
    let capturedCallback: IntersectionObserverCallback | undefined;

    class CapturingMockIO {
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
      constructor(cb: IntersectionObserverCallback) { capturedCallback = cb; }
    }

    vi.stubGlobal('IntersectionObserver', CapturingMockIO);
    component.ngOnInit();
    const fakeEntry = { isIntersecting: true, target: { id: 'chapter-experiences' } } as unknown as IntersectionObserverEntry;
    capturedCallback!([fakeEntry], null as unknown as IntersectionObserver);
    expect(component.activeChapter()).toBe('chapter-experiences');
  });

  it('ngOnInit IntersectionObserver callback ignores non-intersecting entries', () => {
    let capturedCallback: IntersectionObserverCallback | undefined;

    class CapturingMockIO {
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
      constructor(cb: IntersectionObserverCallback) { capturedCallback = cb; }
    }

    vi.stubGlobal('IntersectionObserver', CapturingMockIO);
    component.ngOnInit();
    const initial = component.activeChapter();
    const fakeEntry = { isIntersecting: false, target: { id: 'chapter-experiences' } } as unknown as IntersectionObserverEntry;
    capturedCallback!([fakeEntry], null as unknown as IntersectionObserver);
    expect(component.activeChapter()).toBe(initial);
  });
});

describe('Home - server platform (SSR)', () => {
  let serverFixture: ComponentFixture<Home>;
  let serverComponent: Home;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
    }).compileComponents();

    serverFixture = TestBed.createComponent(Home);
    serverComponent = serverFixture.componentInstance;
    await serverFixture.whenStable();
  });

  afterEach(() => {
    serverFixture.destroy();
  });

  it('ngOnInit should not create IntersectionObserver on server platform', () => {
    const constructorSpy = vi.fn();

    class SpyIO {
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
      constructor(cb: IntersectionObserverCallback) { constructorSpy(cb); }
    }

    vi.stubGlobal('IntersectionObserver', SpyIO);

    try {
      serverComponent.ngOnInit();
      expect(constructorSpy).not.toHaveBeenCalled();
    } finally {
      vi.unstubAllGlobals();
    }
  });

  it('ngOnDestroy should not throw when chapterObserver is null (SSR path)', () => {
    expect(() => serverComponent.ngOnDestroy()).not.toThrow();
  });
});
