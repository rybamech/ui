import {Injectable} from '@angular/core';
import {ValidationResult} from "../entities/validation";

@Injectable()
export class ValidationService {
  standartRules: Map<string, (value: string) => ValidationResult> = new Map<string, (value: string) => ValidationResult>(
    [
      [
        'required',
        (value: string) => new ValidationResult({
          value: value,
          isValid: value !== '',
          severity: 'danger'
        })
      ],
      [
        'number',
        (value: string) => new ValidationResult({
          value: value,
          isValid: !/[a-z]/g.test(value),
          severity: 'warning'
        })
      ]
    ]
  );

  constructor() {
  }

  validateByStandartRule(value: string, rule: string): ValidationResult {
    const validateAction = this.standartRules.get(rule);
    return validateAction(value);
  }

}
