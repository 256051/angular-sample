import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: Product[] = [];
  constructor(
    private http: HttpClient
    ) { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  /*方法会收集用户加到购物车中的商品，并返回每个商品及其数量*/
  getItems() {
    return this.items;
  }

  /*方法返回一个空数组，用来清空购物车*/
  clearCart() {
    this.items = [];
    return this.items;
  }
  
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
