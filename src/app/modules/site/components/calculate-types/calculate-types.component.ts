import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-calculate-types',
  templateUrl: './calculate-types.component.html',
  styleUrls: ['./calculate-types.component.css']
})
export class CalculateTypesComponent {

  @Output() selectType = new EventEmitter();
  @Input() type: string = '';
}
