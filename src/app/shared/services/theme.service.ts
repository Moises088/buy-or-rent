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
    textMuted: "#ebebeb",
    borderMuted: "#0D2317",
    btnGrayLinear: "linear-gradient(104deg, rgb(27, 29, 30), rgb(34, 36, 38))",
    btnGraySecondaryLinear: "linear-gradient(104deg, rgb(27, 29, 30), rgb(34, 36, 38))",
    backgroundSecondary: "#222933"
  }

  private readonly light = {
    background: "#FFF",
    text: "#000",
    textSecondary: "#37474F",
    textMuted: "#0D2317",
    borderMuted: "#ebebeb",
    btnGrayLinear: "linear-gradient(104deg, #fafafa, #eee)",
    btnGraySecondaryLinear: "linear-gradient(104deg, #eaeaea, #dfdfdf)",
    backgroundSecondary: "#e6e6e6"
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
      document.documentElement.style.setProperty('--btn-gray-linear', this.dark.btnGrayLinear);
      document.documentElement.style.setProperty('--background-secondary', this.dark.backgroundSecondary);
      document.documentElement.style.setProperty('--background-gray-linear', this.dark.btnGraySecondaryLinear);
      document.documentElement.style.setProperty('--border-muted', this.dark.borderMuted);
    } else {
      document.documentElement.style.setProperty('--background-primary', this.light.background);
      document.documentElement.style.setProperty('--text-primary', this.light.text);
      document.documentElement.style.setProperty('--text-secondary', this.light.textSecondary);
      document.documentElement.style.setProperty('--text-muted', this.light.textMuted);
      document.documentElement.style.setProperty('--btn-gray-linear', this.light.btnGrayLinear);
      document.documentElement.style.setProperty('--background-secondary', this.light.backgroundSecondary);
      document.documentElement.style.setProperty('--background-gray-linear', this.light.btnGraySecondaryLinear);
      document.documentElement.style.setProperty('--border-muted', this.light.borderMuted);
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