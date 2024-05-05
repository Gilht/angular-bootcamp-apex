import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootService {

 persistenData: string = "Im a variable inside a singleton."

  constructor() { }
}
