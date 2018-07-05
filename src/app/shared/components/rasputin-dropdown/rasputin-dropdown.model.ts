import {RasputinDropdownTextComponent} from "./rasputin-dropdown-item/rasputin-dropdown-text/rasputin-dropdown-text.component";
import {Component, NgZone} from "@angular/core";
import {RasputinDropdownImageTextComponent} from "./rasputin-dropdown-item/rasputin-dropdown-image-text/rasputin-dropdown-image-text.component";

interface RasputinDropdownConstructor {
  selectedItem: RasputinDropdownInput.Item;
  title?: string;
  items: Array<RasputinDropdownInput.Item>,
  sideEffect?: () => void
}

interface RasputinDropdownItemConstructor {
  id: number;
  value: string;
}

export namespace RasputinDropdownInput {
  export class Model {

    selectedItem: RasputinDropdownInput.Item = null;

    title = '';

    items: Array<Item> = [];

    constructor(data: RasputinDropdownConstructor) {
      // При создании экземпляра проверяет на наличие свойства
      if (data) {
        for (const key in data) {
          if (key in this) {
            this[key] = data[key];
          } else {
            throw Error(`Next property: <<${key}>> is not defined in RasputinDropdownModel.Input. May be you need add defaut value`);
          }
        }
      }
    }

    sideEffect() {

    }

    changeModel(newValue: Item): void {
      // побочные эффекты должны вызываться после мутации состояния
      this.selectedItem = newValue;
      for(const item of this.items) {
        if(newValue === item) {
          item.isSelected = true;
        } else {
          item.isSelected = false;
        }
      }
      this.sideEffect();
    }
  }

  export abstract class Item {
    abstract componentReference;

    value: string;

    id: number;

    isSelected: boolean;

    constructor(value, id) {
      this.value = value;
      this.id = id;
    }
  }

  export class TextItem extends Item {
    componentReference = RasputinDropdownTextComponent;
  }

  export class ImageTextItem extends TextItem {
    componentReference = RasputinDropdownImageTextComponent;

    imageReference: string;

    constructor(value, id, imageReference) {
      super(value, id);
      this.imageReference = imageReference;
    }
  }
}
