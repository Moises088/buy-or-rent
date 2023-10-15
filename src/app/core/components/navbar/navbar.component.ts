import { Component } from '@angular/core';
import { ThemeOptions } from 'src/app/shared/interfaces/theme.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public readonly options = ThemeOptions;
  public theme: ThemeOptions = ThemeOptions.Light;

  toggleTheme(theme: ThemeOptions) {
    this.theme = theme;
  }
}
