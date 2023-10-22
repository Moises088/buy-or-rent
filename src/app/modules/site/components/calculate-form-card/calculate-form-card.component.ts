import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CalculateFormCardDto } from 'src/app/shared/interfaces/calculate.interface';

@Component({
  selector: 'app-calculate-form-card',
  templateUrl: './calculate-form-card.component.html',
  styleUrls: ['./calculate-form-card.component.css']
})
export class CalculateFormCardComponent implements OnInit {
  @Input() form: Record<string, string> = {}

  @Input() title: string = '';
  @Input() position!: number;
  @Input() inputs: CalculateFormCardDto[] = [];

  @Output() valueChange = new EventEmitter<{ key: string, value: string }>();

  public formattedOptions = {
    prefix: '',
    thousands: '.',
    decimal: ',',
    align: 'left'
  };

  ngOnInit(): void {
    for (const input of this.inputs) {
      if (input.type == 'input-money') {
        if (!this.form[input.key]) this.form[input.key] = "0";
      }
    }
  }

  onInputChange(key: string, { value }: any) {
    this.valueChange.emit({ key, value });
  }

  onInputChangeCheck(key: string, { checked }: any) {
    this.onInputChange(key, { value: checked })
  }
}
