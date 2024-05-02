import { IProductResponse } from '../interfaces/product.interface';

export class Product {
  _id: string;
  sku: string;
  name: string;
  description: string;
  price: number;
  image: string;

 constructor(data?: IProductResponse) {
  this._id = data?._id || '';
  this.sku = data?.sku || '';
  this.name = data?.name ? this.getNameUpperCase(data.name) : '';
  this.description = data?.description || '';
  this.price = data?.price || 0;
  this.image = data?.images?.[0] || '';
}

  getNameUpperCase(name: string): string {
    return name.toUpperCase();
  }
}



