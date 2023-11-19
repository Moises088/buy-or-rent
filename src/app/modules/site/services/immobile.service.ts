import { Injectable } from '@angular/core';
import { CalculateForm } from 'src/app/shared/interfaces/calculate.interface';

@Injectable({
  providedIn: 'root'
})
export class ImmobileService {

  constructor() { }

  public calculateImmobile(form: CalculateForm) {
    const totalPurchase = this.calculatePurchase(form)
    console.log("totalPurchase", totalPurchase)
  }

  private calculatePurchase(form: CalculateForm) {
    const entry = form.entry;
    const installments = form.installments * form.numberInstallments;

    return entry + installments;
  }

  private calculateRental(form: CalculateForm) {

  }
}
