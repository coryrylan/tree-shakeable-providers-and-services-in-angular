import { Injectable } from '@angular/core';

console.log('SharedService bundled because two components use it');

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() {
    console.log('SharedService instantiated');
  }
}