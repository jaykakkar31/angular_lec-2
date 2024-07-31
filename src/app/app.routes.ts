import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { ProductlistsComponent } from './products/productlists/productlists.component';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';

export const routes: Routes = [
    { path: '', component: FirstComponent },
    { path: 'first', component: FirstComponent },
    { path: 'second', component: SecondComponent },
    { path: 'contact', component: ContactComponent },
    { path: "product", component: ProductlistsComponent },
    { path: "product/:id", component: ProductdetailsComponent },
    { path: "**", component: NotfoundComponent }
];
