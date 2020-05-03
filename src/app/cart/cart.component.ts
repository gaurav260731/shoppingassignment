import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartdata: any;
  finalcartval: number;
  cartval = [];
  bill: any;

  constructor() { }

  ngOnInit() {
    this.getCartData();
    if (this.bill !== 0) {
      this.finalcartval  = this.cartval.length;
    } else {
      this.finalcartval = 0;
    }

  }

  getCartData() {
    this.bill = 0;
    this.cartval = JSON.parse(localStorage.getItem('cart'));
    // tslint:disable-next-line: forin
    for (const i in this.cartval) {
      this.cartval[i].qt = 1;
      this.bill = this.bill + this.cartval[i].discount * this.cartval[i].qt;
    }
    this.cartdata = this.cartval;
  }

  updateTotal() {
    this.bill = 0;
    // tslint:disable-next-line: forin
    for (const i in this.cartval) {
      this.bill = this.bill + this.cartval[i].discount * this.cartval[i].qt;
    }
  }

  removeItem(index) {
    this.cartval.splice(index, 1);
    if(this.cartval.length){
      localStorage.setItem('cart', JSON.stringify(this.cartval));
    } else {
      localStorage.setItem('cart', null);
    }
    this.updateTotal();
    this.finalcartval  = this.cartval.length;
  }

}
