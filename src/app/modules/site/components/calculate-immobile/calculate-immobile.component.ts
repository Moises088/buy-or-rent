import { Component, OnInit } from '@angular/core';
import { BrazilStates } from 'src/app/shared/constants/states.constant';
import { CalculateFormCardDto } from 'src/app/shared/interfaces/calculate.interface';
import { TranslationService } from 'src/app/shared/services/translation.service';

@Component({
  selector: 'app-calculate-immobile',
  templateUrl: './calculate-immobile.component.html',
  styleUrls: ['./calculate-immobile.component.css']
})
export class CalculateImmobileComponent implements OnInit {
  public translations: any;

  public form: Record<string, string> = {}

  public forms: { title: string, inputs: CalculateFormCardDto[] }[] = []

  constructor(
    private readonly translationService: TranslationService
  ) { }

  ngOnInit() {
    this.translationService.getLanguage().subscribe(language => {
      this.translations = this.translationService.getTranslations(language);
      this.setInputs()
    });
  }

  private setInputs() {
    this.forms = [
      {
        title: this.translations?.main?.immobile?.location,
        inputs: [
          {
            key: 'country',
            label: this.translations?.main?.immobile?.country,
            type: "select",
            selectOptions: [
              { key: 'brazil', label: "Brasil" },
              { key: 'usa', label: "United States" },
            ]
          },
          {
            key: 'state',
            label: this.translations?.main?.immobile?.state,
            type: "select",
            selectOptions: BrazilStates
          },
        ]
      },
      {
        title: this.translations?.main?.immobile?.purchaseProperty,
        inputs: [
          {
            key: 'entry',
            label: this.translations?.main?.immobile?.entry,
            type: "input-money",
            prefix: "R$"
          },
          {
            key: 'installments',
            label: this.translations?.main?.immobile?.installments,
            type: "input-money",
            prefix: "R$"
          },
          {
            key: 'numberInstallments',
            label: this.translations?.main?.immobile?.numberInstallments,
            type: "input",
            subType: "number",
            prefix: "X",
            placeholder: "50"
          },
        ]
      },
      {
        title: this.translations?.main?.immobile?.rental,
        inputs: [
          {
            key: 'entry',
            label: this.translations?.main?.immobile?.rentValue,
            type: "input-money",
            prefix: "R$"
          },
          {
            key: 'numberInstallments',
            label: this.translations?.main?.immobile?.rentYears,
            type: "input",
            subType: "number",
            placeholder: "5"
          },
          {
            key: 'numberInstallments',
            label: this.translations?.main?.immobile?.rentInclude,
            type: "checkbox-list",
            checkboxList: [
              [
                { key: "water", title: this.translations?.main?.immobile?.rentIncludes?.water },
                { key: "energy", title: this.translations?.main?.immobile?.rentIncludes?.light },
              ],
              [
                { key: "internet", title: this.translations?.main?.immobile?.rentIncludes?.internet },
                { key: "gas", title: this.translations?.main?.immobile?.rentIncludes?.gas },
              ],
              [
                { key: "condominium", title: this.translations?.main?.immobile?.rentIncludes?.condominium },
              ]
            ]
          },
        ]
      },
      {
        title: this.translations?.main?.immobile?.extraExpenses,
        inputs: [
          {
            key: 'itbi',
            label: `Imposto sobre a transmissão de imóveis (ITBI) (compra)`,
            type: "input-money",
            prefix: "R$"
          },
          {
            key: 'transferRate',
            label: `${this.translations?.main?.immobile?.transferRate} (${this.translations?.main?.immobile?.purchase})`,
            type: "input-money",
            prefix: "R$"
          },
          {
            key: 'brokerageFees',
            label: `${this.translations?.main?.immobile?.brokerageFees} (${this.translations?.main?.immobile?.purchase})`,
            type: "input-money",
            prefix: "R$"
          },
        ]
      },
    ]
  }
}