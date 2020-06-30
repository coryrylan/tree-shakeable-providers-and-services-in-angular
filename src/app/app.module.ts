import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Shared3Service } from './shared3.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HelloComponent },
      { path: 'feature-1',  loadChildren: () => import('./feature-1/feature-1.module').then(m => m.Feature1Module) },
      { path: 'feature-2',  loadChildren: () => import('./feature-2/feature-2.module').then(m => m.Feature2Module) }
    ])
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [Shared3Service]
})
export class AppModule { }
