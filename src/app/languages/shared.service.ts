import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private selectedLanguageSubject = new BehaviorSubject<string>('English');
  selectedLanguage$ = this.selectedLanguageSubject.asObservable();

  private selectedCurrencySubject = new BehaviorSubject<string>('USD');
  selectedCurrency$ = this.selectedCurrencySubject.asObservable();

  private currencies: any[] = [
    { code: 'USD', name: 'United States Dollar'},
    { code: 'EUR', name: 'Euro'},
    { code: 'GBP', name: 'Pound Sterling'},
  ];

  constructor() {}

  updateLanguage(language: string) {
    this.selectedLanguageSubject.next(language);
  }

  updateCurrency(currency: string) {
    this.selectedCurrencySubject.next(currency);
  }

  getCurrencies(): any[] {
    return this.currencies;
  }
}
