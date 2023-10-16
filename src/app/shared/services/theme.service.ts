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
    textSecondary: "#c2c2c2",
    textMuted: "#ebebeb"
  }
  
  private readonly light = {
    background: "#FFF",
    text: "#000",
    textSecondary: "#37474F",
    textMuted: "#0D2317"
  }

  constructor() { }

  setTheme(theme: ThemeOptions) {
    this.currentTheme = theme;

    localStorage.setItem("theme", theme)

    if (theme == ThemeOptions.Dark) {
      document.documentElement.style.setProperty('--background-primary', this.dark.background);
      document.documentElement.style.setProperty('--text-primary', this.dark.text);
      document.documentElement.style.setProperty('--text-secondary', this.dark.textSecondary);
      document.documentElement.style.setProperty('--text-muted', this.dark.textMuted);
    } else {
      document.documentElement.style.setProperty('--background-primary', this.light.background);
      document.documentElement.style.setProperty('--text-primary', this.light.text);
      document.documentElement.style.setProperty('--text-secondary', this.light.textSecondary);
      document.documentElement.style.setProperty('--text-muted', this.light.textMuted);
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