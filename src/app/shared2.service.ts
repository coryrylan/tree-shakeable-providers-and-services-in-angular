import { Injectable } from '@angular/core';

console.log('Shared2Service is not bundled because it not used');

@Injectable({
  providedIn: 'root'
})
export class Shared2Service {
  constructor() { }
}