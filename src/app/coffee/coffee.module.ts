import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCoffeeComponent } from './list-coffee/list-coffee.component';
import { DetailCoffeeComponent } from './detail-coffee/detail-coffee.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListCoffeeComponent, DetailCoffeeComponent],
  exports: [ListCoffeeComponent]
})
export class CoffeeModule { }
