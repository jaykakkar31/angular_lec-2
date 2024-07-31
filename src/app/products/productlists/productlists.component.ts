import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-productlists',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './productlists.component.html',
  styleUrl: './productlists.component.sass'
})
export class ProductlistsComponent {
  constructor(private store: ProductsService) { }
  products: any[] = []
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store.getAllProducts().subscribe(data => {
      this.products = data
    })
  }
}
