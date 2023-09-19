import { Component, Input } from '@angular/core';
import { Product } from '../interface/product';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product !: Product

  constructor(private router: Router , private cartService: CartService, private counter: CounterService) {}
  count: number = 0;
  selectedItem: any;

  RedirectToDetails(id: number){
    this.router.navigate(['info' , id]);
  }
  public id !:string | null;
  public item !: any;


  ngOnInit() {
    this.counter
      .getCounterVal()
      .subscribe((val) => (this.count = val));

    this.selectedItem = this.cartService.getSelectedItems();
  }

  
  addToCart(item: any) {
    if(this.count < item.stock){
      if(this.selectedItem.find( (val:any) => item == val)){
        this.counter.setCartValue(++this.count)
        console.log(this.selectedItem)
      }else{
        this.cartService.addItem(item)
        this.counter.setCartValue(++this.count)
        console.log(this.selectedItem)
      }
    }
  }
}