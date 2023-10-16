import { Component } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buy-or-rent';

  constructor(
    private readonly themeService: ThemeService
  ) { }

  ngOnInit() {
    this.themeService.load()
  }
}
