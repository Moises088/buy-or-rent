import { Component, OnInit } from '@angular/core';
import { ThemeOptions } from 'src/app/shared/interfaces/theme.interface';
import { ThemeService } from 'src/app/shared/services/theme.service';
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

  constructor(
    private readonly translationService: TranslationService,
    private readonly themeService: ThemeService
  ) { }

  ngOnInit() {
    this.translationService.getLanguage().subscribe(language => {
      this.currentLanguage = language;
      this.translations = this.translationService.getTranslations(language);
    });

    this.loadTheme()
    this.loadLanguage()
  }

  toggleTheme(theme: ThemeOptions) {
    this.theme = theme;
    this.themeService.setTheme(this.theme)
  }

  toggleLanguage(event: any) {
    const selectedLanguage = event.value;
    this.translationService.setLanguage(selectedLanguage);
  }

  async loadTheme() {
    const theme = await this.themeService.getCurrentTheme();
    this.theme = theme;
  }

  private loadLanguage() {
    const language = window.navigator.language;
    if (['pt-BR', 'en'].includes(language)) {
      this.toggleLanguage({ value: language })
    }
  }
}
