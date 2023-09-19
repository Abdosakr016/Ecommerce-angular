import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interface/product';
import Products  from '../../assets/products-list.json'; 
import { productService } from '../service/api-service.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  products: Array<Product> = Products
  public id !:string | null;
  public item !: any;
  @Input() product !: Product
  constructor(private productService: productService, private activeRoute : ActivatedRoute){
  }

  ngOnInit() {
    const paramsID = this.activeRoute.snapshot.params['id'];
    // this.id =  this.activeRoute.snapshot.params['id'];
    if (this.id !== null)
    this.getproduct();
    this.productService
    .getProductDetails(paramsID)
    .subscribe((data) => {
      this.item = data
    } );
    };

    getproduct() {
      if (this.id !== null)
      {this.item = this.products.find(item => item.id.toString() == this.id);}
    }
}

