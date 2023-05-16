import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-list-coffee',
  templateUrl: './list-coffee.component.html',
  styleUrls: ['./list-coffee.component.css']
})
export class ListCoffeeComponent implements OnInit {

  coffees: Array<Coffee> = [];
  selected: Boolean = false;
  selectedCoffee!: Coffee;

  totalOrigen: number = 0;
  totalBlend: number = 0;

  constructor(private coffeeService: CoffeeService) { }

  getCoffees(): void {
    this.coffeeService.getCoffees().subscribe(
      coffees => {
        this.coffees = coffees;
        this.totalOrigen = coffees.filter(coffee => coffee.tipo === 'Café de Origen').length;
        this.totalBlend = coffees.filter(coffee => coffee.tipo === 'Blend').length;
      }
    );
  }

  onSelected(coffee: Coffee): void {
    this.selected = true;
    this.selectedCoffee = coffee;
  }

  ngOnInit() {
    this.getCoffees();
  }

}
