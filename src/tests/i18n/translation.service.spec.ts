import { TestBed } from '@angular/core/testing';
import { TranslationService } from '@app/i18n/translation.service';

describe('TranslationService', () => {
  let service: TranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default to english locale', () => {
    expect(service.currentLang()).toBe('en');
  });

  it('should translate a known key in english', () => {
    expect(service.translate('nav.home')).toBe('Home');
  });

  it('should translate a known key in portuguese after language change', () => {
    service.setLanguage('pt');
    expect(service.translate('nav.home')).toBe('Início');
  });

  it('should return the key itself when translation does not exist', () => {
    expect(service.translate('unknown.key.xyz')).toBe('unknown.key.xyz');
  });

  it('should update currentLang when setLanguage is called with a different locale', () => {
    service.setLanguage('pt');
    expect(service.currentLang()).toBe('pt');
  });

  it('should not change state when setLanguage is called with the same locale', () => {
    service.setLanguage('en');
    expect(service.currentLang()).toBe('en');
  });

  it('should correctly translate nav.about in both languages', () => {
    expect(service.translate('nav.about')).toBe('About');
    service.setLanguage('pt');
    expect(service.translate('nav.about')).toBe('Sobre');
  });
});
