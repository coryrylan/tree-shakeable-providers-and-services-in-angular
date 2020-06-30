import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Feature1Component } from './feature-1.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: Feature1Component }
    ])
  ],
  declarations: [Feature1Component]
})
export class Feature1Module { }