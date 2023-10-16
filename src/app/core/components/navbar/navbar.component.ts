import { Component, OnInit } from '@angular/core';
import { ThemeOptions } from 'src/app/shared/interfaces/theme.interface';
import { TranslationService } from 'src/app/shared/services/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public readonly options = ThemeOptions;
  public currentLanguage: string = 'en';
  public theme: ThemeOptions = ThemeOptions.Light;
  public translations: any;

  constructor(private translationService: TranslationService) { }

  ngOnInit() {
    this.translationService.getLanguage().subscribe(language => {
      this.currentLanguage = language;
      this.translations = this.translationService.getTranslations(language);
      console.log(this.translations)
    });
  }

  toggleTheme(theme: ThemeOptions) {
    this.theme = theme;
  }

  toggleLanguage(event: any) {
    const selectedLanguage = (event.target as HTMLSelectElement).value;
    this.translationService.setLanguage(selectedLanguage);
  }
}
