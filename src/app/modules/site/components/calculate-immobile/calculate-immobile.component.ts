import { Component, OnInit } from '@angular/core';
import { BrazilStates, EUAStates } from 'src/app/shared/constants/states.constant';
import { CalculateForm, CalculateFormCardDto } from 'src/app/shared/interfaces/calculate.interface';
import { TranslationService } from 'src/app/shared/services/translation.service';
import { ImmobileService } from '../../services/immobile.service';
import { TransformStringMoney } from 'src/app/shared/constants/convert.constant';

@Component({
  selector: 'app-calculate-immobile',
  templateUrl: './calculate-immobile.component.html',
  styleUrls: ['./calculate-immobile.component.css']
})
export class CalculateImmobileComponent implements OnInit {
  public translations: any;

  public form: Record<string, string> = { country: 'brazil', state: BrazilStates[0].key }

  public forms: { title: string, inputs: CalculateFormCardDto[] }[] = []

  public itbi: CalculateFormCardDto = {
    key: 'itbi',
    label: `Imposto sobre a transmissão de imóveis (ITBI) (compra)`,
    type: "input-money",
    prefix: "R$"
  }

  public erros: Array<string> = [];

  constructor(
    private readonly translationService: TranslationService,
    private readonly immobileService: ImmobileService
  ) { }

  ngOnInit() {
    this.translationService.getLanguage().subscribe(language => {
      this.translations = this.translationService.getTranslations(language);
      this.setInputs()
    });
  }

  public valueChange(event: { key: string, value: string }) {
    this.form[event.key] = event.value;

    if (event.key == 'country') {
      this.changeState(event.value)
    }
  }

  private changeState(country: string) {
    const forms: { title: string, inputs: CalculateFormCardDto[] }[] = JSON.parse(JSON.stringify(this.forms))
    const formLocale = forms.find(f => f.inputs.find(i => i.key == "state"))
    const formExtra = forms.find(f => f.inputs.find(i => i.key == "transferRate"))
    const form = formLocale?.inputs.find(i => i.key == 'state')
    const formitbi = formExtra?.inputs.filter(i => i.key != 'itbi');

    switch (country) {
      case 'brazil':
        if (form?.selectOptions) {
          form.selectOptions = BrazilStates;
          this.form['state'] = BrazilStates[0].key;
          console.log("formitbi?.length && formExtra", formitbi, formExtra)
          if (formitbi?.length && formExtra) formExtra['inputs'] = [...formitbi, this.itbi];
        }
        break;
      case 'usa':
        if (form?.selectOptions) {
          form.selectOptions = EUAStates;
          this.form['state'] = EUAStates[0].key;
          if (formitbi?.length && formExtra) formExtra['inputs'] = formitbi;
        }
        break;
      default:
        if (form?.selectOptions) {
          form.selectOptions = BrazilStates;
          this.form['state'] = BrazilStates[0].key;
          if (formitbi?.length && formExtra) formExtra['inputs'] = [...formitbi, this.itbi];
        }
        break;
    }

    this.forms = [...forms]
  }

  public sendForm() {
    const form: CalculateForm = this.form as any;
    form.entry = TransformStringMoney(String(form.entry));
    form.installments = TransformStringMoney(String(form.installments));
    form.rentValue = TransformStringMoney(String(form.rentValue));
    if (form.rentYears) form.rentYears = parseInt(String(form.rentYears));
    if (form.rentYears) form.numberInstallments = parseInt(String(form.numberInstallments));
    if (form.transferRate) form.transferRate = TransformStringMoney(String(form.transferRate));
    if (form.brokerageFees) form.brokerageFees = TransformStringMoney(String(form.brokerageFees));
    if (form.itbi) form.itbi = TransformStringMoney(String(form.itbi));

    const erros = this.validForm(form)
    if (erros?.length) return;

    this.immobileService.calculateImmobile(form)
  }

  private validForm(form: CalculateForm) {
    const erros = [];

    if (!form.country) erros.push(`${this.translations?.main?.required} (${this.translations?.main?.immobile?.country})`)
    if (!form.state) erros.push(`${this.translations?.main?.required} (${this.translations?.main?.immobile?.state})`)
    if (!form.entry) erros.push(`${this.translations?.main?.required} (${this.translations?.main?.immobile?.entry})`)
    if (!form.installments) erros.push(`${this.translations?.main?.required} (${this.translations?.main?.immobile?.installments})`)
    if (!form.numberInstallments) erros.push(`${this.translations?.main?.required} (${this.translations?.main?.immobile?.numberInstallments})`)
    if (!form.rentValue) erros.push(`${this.translations?.main?.required} (${this.translations?.main?.immobile?.rentValue})`)
    if (!form.rentYears) erros.push(`${this.translations?.main?.required} (${this.translations?.main?.immobile?.rentYears})`)

    this.erros = erros;
    return erros;
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
            key: 'rentValue',
            label: this.translations?.main?.immobile?.rentValue,
            type: "input-money",
            prefix: "R$"
          },
          {
            key: 'rentYears',
            label: this.translations?.main?.immobile?.rentYears,
            type: "input",
            subType: "number",
            placeholder: "5"
          },
          {
            key: 'rentInclude',
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
          this.itbi,
        ]
      },
    ]
  }
}
