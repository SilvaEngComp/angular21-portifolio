import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { Header } from '@app/presentation/component/header/header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeAll(() => {
    Element.prototype.scrollIntoView = vi.fn();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change language to pt when onLanguageChange is called with pt', () => {
    component.onLanguageChange('pt');
    expect(component.translation.currentLang()).toBe('pt');
  });

  it('should change language back to en when onLanguageChange is called with en', () => {
    component.onLanguageChange('pt');
    component.onLanguageChange('en');
    expect(component.translation.currentLang()).toBe('en');
  });

  it('should return pt cvUrl when language is pt', () => {
    component.onLanguageChange('pt');
    expect(component.cvUrl()).toContain('PT');
  });

  it('should return en cvUrl when language is en', () => {
    component.onLanguageChange('en');
    expect(component.cvUrl()).toContain('EN');
  });

  it('should set isMobile true when window width < 500', () => {
    Object.defineProperty(window, 'innerWidth', { get: () => 400, configurable: true });
    component.onResize();
    expect(component.isMobile()).toBe(true);
  });

  it('should set isMobile false when window width >= 500', () => {
    Object.defineProperty(window, 'innerWidth', { get: () => 1024, configurable: true });
    component.onResize();
    expect(component.isMobile()).toBe(false);
  });

  it('should scroll to section when element exists', () => {
    const el = document.createElement('div');
    el.id = 'test-section';
    document.body.appendChild(el);
    const scrollSpy = vi.spyOn(el, 'scrollIntoView').mockImplementation(() => {});
    component.scrollTo('test-section');
    expect(scrollSpy).toHaveBeenCalled();
    document.body.removeChild(el);
  });

  it('should not throw when scrollTo targets a non-existent element', () => {
    expect(() => component.scrollTo('nonexistent-id')).not.toThrow();
  });

  it('should trigger onResize via window resize event', () => {
    Object.defineProperty(window, 'innerWidth', { get: () => 320, configurable: true });
    window.dispatchEvent(new Event('resize'));
    expect(component.isMobile()).toBe(true);
  });

  it('should remove section-flash class on animationend', () => {
    const el = document.createElement('div');
    el.id = 'animated-section';
    document.body.appendChild(el);
    vi.spyOn(el, 'scrollIntoView').mockImplementation(() => {});
    component.scrollTo('animated-section');
    expect(el.classList.contains('section-flash')).toBe(true);
    el.dispatchEvent(new Event('animationend'));
    expect(el.classList.contains('section-flash')).toBe(false);
    document.body.removeChild(el);
  });
});
