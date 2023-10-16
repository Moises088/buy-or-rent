import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TranslationService } from 'src/app/shared/services/translation.service';

@Component({
  selector: 'app-calculate-types',
  templateUrl: './calculate-types.component.html',
  styleUrls: ['./calculate-types.component.css']
})
export class CalculateTypesComponent {

  @Output() selectType = new EventEmitter();
  @Input() type: string = '';

  public translations: any;

  constructor(
    private readonly translationService: TranslationService
  ) { }

  ngOnInit() {
    this.translationService.getLanguage().subscribe(language => {
      this.translations = this.translationService.getTranslations(language);
    });
  }
}
