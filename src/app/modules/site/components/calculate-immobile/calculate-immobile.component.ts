import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/shared/services/translation.service';

@Component({
  selector: 'app-calculate-immobile',
  templateUrl: './calculate-immobile.component.html',
  styleUrls: ['./calculate-immobile.component.css']
})
export class CalculateImmobileComponent implements OnInit {
  public formattedOptions = {
    prefix: '',
    thousands: '.',
    decimal: ',',
    align: 'left'
  };

  public translations: any;

  public form: Record<string, string> = {}

  constructor(
    private readonly translationService: TranslationService
  ) { }

  ngOnInit() {
    this.translationService.getLanguage().subscribe(language => {
      this.translations = this.translationService.getTranslations(language);
    });
  }
}
