import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  productService = inject(ProductService);

  quantity:number = 1;

  products :any[]= []

  constructor(){}

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct(){
    this.productService.getAllProductData().subscribe((res:any)=>{
      console.log(res)
      this.products = res.products
    })
  }

  increaseQuantity(productId:any, index:any){
    if(this.products[index].id === productId){
      this.products[index].quantity ++
    }
  }


  decreaseQuantity(productId:any, index:any){

    if(this.products[index].id === productId){
      if(this.products[index].quantity == 1){
        this.products[index].quantity = 1
      }else{
        this.products[index].quantity --;
      }
    }

  }

}
