import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {
  constructor(private sharedService: SharedService) {}

  languages = ['English', 'French', 'Spanish'];
  currencies = [
    { code: 'USD', name: 'United States Dollar', icon: 'attach_money' },
    { code: 'EUR', name: 'Euro', icon: 'euro_symbol' },
    { code: 'GBP', name: 'Pound Sterling', icon: 'currency_pound' },
  ];

  selectedLanguage = 'English';
  selectedCurrency = 'USD';

  changeLanguage() {
    this.sharedService.updateLanguage(this.selectedLanguage);
  }

  changeCurrency() {
    this.sharedService.updateCurrency(this.selectedCurrency);
  }
}
