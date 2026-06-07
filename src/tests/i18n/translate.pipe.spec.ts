import { TestBed } from '@angular/core/testing';
import { TranslatePipe } from '@app/i18n/translate.pipe';
import { TranslationService } from '@app/i18n/translation.service';

describe('TranslatePipe', () => {
  let pipe: TranslatePipe;
  let service: TranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslationService],
    });
    service = TestBed.inject(TranslationService);
    pipe = new TranslatePipe(service);
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform a key to its english translation', () => {
    expect(pipe.transform('nav.home')).toBe('Home');
  });

  it('should transform a key to its portuguese translation after language change', () => {
    service.setLanguage('pt');
    expect(pipe.transform('nav.home')).toBe('Início');
  });

  it('should return the key when translation does not exist', () => {
    expect(pipe.transform('missing.key')).toBe('missing.key');
  });

  it('should reflect language changes reactively', () => {
    expect(pipe.transform('nav.projects')).toBe('Projects');
    service.setLanguage('pt');
    expect(pipe.transform('nav.projects')).toBe('Projetos');
    service.setLanguage('en');
    expect(pipe.transform('nav.projects')).toBe('Projects');
  });
});
