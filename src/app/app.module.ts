import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeightCalculationComponent } from './weight-calculation/weight-calculation.component';

import { FormsModule } from '@angular/forms';
import { ListAllResultComponent } from './list-all-result/list-all-result.component';

@NgModule({
   declarations: [
      AppComponent,
      WeightCalculationComponent,
      ListAllResultComponent
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
