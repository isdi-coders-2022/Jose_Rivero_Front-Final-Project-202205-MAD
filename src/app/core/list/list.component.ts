import { Component, Input, OnInit } from '@angular/core';
import { iProduct } from 'src/app/models/product.model';
import { ProductsApiService } from 'src/app/services/products.api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() products!: Array<iProduct>;
  constructor() {}

  ngOnInit(): void {}
}
