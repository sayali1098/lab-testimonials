import { Component, OnInit } from '@angular/core';
import { progradInterface } from '../prograd-interface';
import { review } from '../prograd';

@Component({
  selector: 'app-test-container',
  templateUrl: './test-container.component.html',
  styleUrls: ['./test-container.component.css'],
})
export class TestContainerComponent implements OnInit {
  prograd: progradInterface[];
  review: any = {};
  constructor() {}

  ngOnInit(): void {
    this.prograd = review;
  }

  addprograd(review): any {
    console.log('Add new prograd');
    this.prograd.unshift(review);
  }
}
