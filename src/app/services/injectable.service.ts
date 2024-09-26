import { Injectable } from '@angular/core';
import { ProvidersModule } from '../modules/providers/providers.module';

@Injectable({
  providedIn: ProvidersModule
})
export class InjectableService {

  public injectableVariable = "one"
  constructor() { }

}
