import { Component } from '@angular/core';
import { Product } from '../interface/product';
import Products  from '../../assets/products-list.json';
import { productService } from '../service/api-service.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public id !:string | null;
  public item !: any;
  products: Array<Product> = Products

  ngOnInit() {
    this.updateprice();
    this.productService.getProductList().subscribe(
      (data: any) => (this.products = data['products']),
      (error) => console.log(error),
      () => console.log("COMPLETE")
    )
    };

    updateprice() {
      for (let i = 0; i < this.products.length; i++) {
        this.products[i].price = 20;
      }
    }

  constructor(private productService: productService) {}


  }
