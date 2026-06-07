import { Home } from './../../../../app/presentation/container/home/home';
import { ComponentFixture, TestBed } from '@angular/core/testing';
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
});
