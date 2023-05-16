import { Component, Input, OnInit } from '@angular/core';
import { CoffeeService } from '../coffee.service';
import { Coffee } from '../coffee';

@Component({
  selector: 'app-detail-coffee',
  templateUrl: './detail-coffee.component.html',
  styleUrls: ['./detail-coffee.component.css']
})
export class DetailCoffeeComponent implements OnInit {

  @Input() coffee!: Coffee;

  constructor () { }

  ngOnInit() {
  }

}
