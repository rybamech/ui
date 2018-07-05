interface ValidationResultData {
  value: string,
  isValid: boolean,
  severity: 'warning' | 'danger' | 'success' | 'primary'
  message?: string
}

export class ValidationResult {

  constructor(data: ValidationResultData) {
    for(const key in data) {
      this[key] = data[key];
    }
  }
}
