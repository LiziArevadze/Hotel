import { Component, OnDestroy } from '@angular/core';
import { SharedService } from '../languages/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  selectedLanguage: string = ''; // Initialize properties
  selectedCurrency: string = '';
  currencyIcon: string = '';
  currencies: any[] = []; // Define currencies array

  private languageSubscription: Subscription;
  private currencySubscription: Subscription;

  constructor(private sharedService: SharedService) {
    this.currencies = this.sharedService.getCurrencies(); // Retrieve currencies array from SharedService

    this.languageSubscription = this.sharedService.selectedLanguage$.subscribe(language => {
      this.selectedLanguage = language;
    });

    this.currencySubscription = this.sharedService.selectedCurrency$.subscribe(currency => {
      this.selectedCurrency = currency;
      this.updateCurrencyIcon();
    });
  }

  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
    this.currencySubscription.unsubscribe();
  }

  updateCurrencyIcon() {
    const selectedCurrencyObj = this.currencies.find(currency => currency.code === this.selectedCurrency);
    if (selectedCurrencyObj) {
      this.currencyIcon = selectedCurrencyObj.icon;
    }
  }
}
