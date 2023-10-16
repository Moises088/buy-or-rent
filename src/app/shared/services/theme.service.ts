import { Injectable } from '@angular/core';
import { ThemeOptions } from '../interfaces/theme.interface';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: ThemeOptions = ThemeOptions.Light;

  private readonly dark = {
    background: "#0D1117",
    text: "#FFF",
    textSecondary: "#ababab",
  }

  private readonly light = {
    background: "#FFF",
    text: "#000",
    textSecondary: "#37474F",
  }

  constructor() { }

  setTheme(theme: ThemeOptions) {
    this.currentTheme = theme;

    localStorage.setItem("theme", theme)

    if (theme == ThemeOptions.Dark) {
      document.documentElement.style.setProperty('--background-primary', this.dark.background);
      document.documentElement.style.setProperty('--text-primary', this.dark.text);
      document.documentElement.style.setProperty('--text-secondary-primary', this.dark.textSecondary);
    } else {
      document.documentElement.style.setProperty('--background-primary', this.light.background);
      document.documentElement.style.setProperty('--text-primary', this.light.text);
      document.documentElement.style.setProperty('--text-secondary-primary', this.light.textSecondary);
    }
  }

  getCurrentTheme() {
    return this.currentTheme;
  }

  async load() {
    const theme = await localStorage.getItem("theme") as ThemeOptions | null;
    this.setTheme(theme ?? ThemeOptions.Light)
  }
}