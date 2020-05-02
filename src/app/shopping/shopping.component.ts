import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  data =  [
    {
      productid: 1,
      imageurl: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      name: 'Laptop',
      price: '300',
      discount: '200',
      pdiscount: '65% off'
    },
    {
      productid: 2,
      imageurl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      name: 'Mobile',
      price: '400',
      discount: '200',
      pdiscount: '35% off'
    },
    {
      productid: 3,
      imageurl: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      name: 'Camera',
      price: '500',
      discount: '100',
      pdiscount: '55% off'
    },
    {
      productid: 4,
      imageurl: 'https://www.sony.co.in/image/2e299427c2a9958eab3ad2e8c7108593?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9',
      name: 'Handycam',
      price: '700',
      discount: '100',
      pdiscount: '10% off'
    },
    {
      productid: 5,
      imageurl: 'https://icdn3.digitaltrends.com/image/digitaltrends/gopro-hero-review-1.jpg',
      name: 'Gopro',
      price: '900',
      discount: '200',
      pdiscount: '20% off'
    },
    {
      productid: 6,
      imageurl: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_new-iphone-se-white_04152020_big.jpg.large.jpg',
      name: 'iphone',
      price: '900',
      discount: '200',
      pdiscount: '20% off'
    },
    {
      productid: 7,
      imageurl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTP62_VW_34FR+watch-40-alum-spacegray-cell-5s_VW_34FR_WF_CO?wid=1400&hei=1400&fmt=p-jpg&qlt=80&op_usm=0.5,0.5&.v=1566449863965,1569365625508',
      name: 'Apple watch',
      price: '950',
      discount: '200',
      pdiscount: '20% off'
    }

  ];

  cartproducts: any;
  finalcartval = 0;
  cartdata: any;
  cartvalue = [];
  constructor() { }

  ngOnInit() {
    let data = localStorage.getItem('cart');
    if( data !== "null") {
      this.cartproducts = JSON.parse(data);
      this.finalcartval = this.cartproducts.length;
    } else {
      this.cartproducts = 0;
    }
  }

  addCart(index) {
    this.cartdata = this.data[index];
    let data = localStorage.getItem('cart');
    if (data !== "null"){
      this.cartvalue = JSON.parse(data);
    }
    this.cartvalue.push(this.cartdata);
    this.updateCartData(this.cartvalue);
    localStorage.setItem('cart', JSON.stringify(this.cartvalue));
    this.cartproducts = this.cartvalue;
    this.finalcartval = this.cartproducts.length;
    console.log(" This is cart product length" + this.finalcartval);
  }

  updateCartData(updatedval) {
    this.cartproducts = updatedval;
  }

  // onClicked(value: string) {
  //   console.log(value);
  //   if (value !== '') {
  //   this.cartdata = this.cartdata.filter(res => res.name.startsWith(value));
  //   console.log(this.cartdata);
  //   }
  //}

}
