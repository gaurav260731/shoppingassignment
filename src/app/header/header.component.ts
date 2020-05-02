import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() cartlenval: number;
  constructor() { }

  ngOnInit() {
    console.log('cartnotval' + this.cartlenval);
  }


  check(val) {
    console.log(val);
  }

}
