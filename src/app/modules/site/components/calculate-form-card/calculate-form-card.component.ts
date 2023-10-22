import { Component, Input, Output } from '@angular/core';
import { CalculateFormCardDto } from 'src/app/shared/interfaces/calculate.interface';

@Component({
  selector: 'app-calculate-form-card',
  templateUrl: './calculate-form-card.component.html',
  styleUrls: ['./calculate-form-card.component.css']
})
export class CalculateFormCardComponent {
  form: Record<string, string> = {}

  @Input() title: string = '';
  @Input() position!: number;
  @Input() inputs: CalculateFormCardDto[] = []

  public formattedOptions = {
    prefix: '',
    thousands: '.',
    decimal: ',',
    align: 'left'
  };

}
