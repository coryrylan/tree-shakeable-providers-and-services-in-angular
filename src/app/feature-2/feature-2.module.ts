import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Feature2Component } from './feature-2.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: Feature2Component }
    ])
  ],
  declarations: [Feature2Component]
})
export class Feature2Module { }