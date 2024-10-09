import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:7200/api/v1'

  constructor( private http : HttpClient ) { }

  getAllProductData(){
    return this.http.get( this.baseUrl +`/get-product-details`)
  }
}
