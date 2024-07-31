import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  data: any[] = [
    { id: 1, name: "guitar", price: 1000 },
    { id: 2, name: "Piano", price: 1000 },
    { id: 3, name: "Drums", price: 1000 }
  ]
  constructor() { }


  getAllProducts(){
    return of(this.data)
  }
  getProduct(id:number){
    return of(this.data.find((i)=>i.id==id))

  }
}
