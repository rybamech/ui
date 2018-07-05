interface RasputinInputConstructor {
  value: string;
  title?: string;
  validation?: string;
  mask?: string;
  length?: number;
  type?: string;
  sideEffect?: () => void;
}

export class RasputinInputModel {
  value = '';

  validation = '';

  mask = '';

  length = Infinity;

  title = '';

  type =  '';

  constructor(data?: RasputinInputConstructor) {
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

  sideEffect() {

  }

  changeModel(newValue: string): void {
    // побочные эффекты должны вызываться после мутации состояния
    this.value = newValue;
    this.sideEffect();
  }

}
