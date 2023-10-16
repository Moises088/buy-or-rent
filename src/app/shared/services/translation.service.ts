import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LANGUAGUES } from '../constants/translation.constant';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private language: BehaviorSubject<string> = new BehaviorSubject<string>('en');

  setLanguage(language: string) {
    this.language.next(language);
  }

  getLanguage(): Observable<string> {
    return this.language.asObservable();
  }

  getTranslations(language: string): any {
    if (language === 'pt-BR') {
      return LANGUAGUES['pt-BR'];
    } else if (language === 'en') {
      return LANGUAGUES['en'];
    } else {
      return LANGUAGUES['en'];
    }
  }
}
