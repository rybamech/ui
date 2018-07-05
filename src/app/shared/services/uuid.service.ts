import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable()
export class UuidService {

  constructor() { }

  createKey(): string {
    return uuid();
  }

}
