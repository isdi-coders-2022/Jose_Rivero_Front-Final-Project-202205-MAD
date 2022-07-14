import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iProduct } from '../models/product.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() product!: iProduct;

  constructor() {}

  ngOnInit(): void {}
}
