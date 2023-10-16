import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/shared/services/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public translations: any;
  public type: string = '';

  constructor(
    private readonly translationService: TranslationService
  ) { }

  ngOnInit() {
    this.translationService.getLanguage().subscribe(language => {
      this.translations = this.translationService.getTranslations(language);
    });
  }

  selectType(type: string) {
    this.type = type;
  }
}
