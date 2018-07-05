interface RasputinCheckboxConstructor {
  value?: boolean;
  sideEffect?: () => void;
}

export class RasputinCheckboxModel {
  value = false;

  constructor(data?: RasputinCheckboxConstructor) {
    // При создании экземпляра проверяет на наличие свойства
    if (data) {
      for (const key in data) {
        if (key in this) {
          this[key] = data[key];
        } else {
          throw Error(`Next property: <<${key}>> is not defined in RasputinInputModel. May be you need add empty string as
          default value.`);
        }
      }
    }
  }

  changeModel(data: boolean) {
    if (typeof data === 'boolean') {
      this.value = data;
    } else {
      throw Error('value is not boolean');
    }
  }


  sideEffect() {

  }
}
