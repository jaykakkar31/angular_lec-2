import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.sass'
})
export class ProductdetailsComponent {
    constructor(private store:ProductsService,private route:ActivatedRoute){}
    product:any={}
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.route.paramMap.subscribe(params => {
          let id=params.get('id')
          if(id)
            this.store.getProduct(parseInt(id)).subscribe(p=>this.product=p)
      })
    }


}
