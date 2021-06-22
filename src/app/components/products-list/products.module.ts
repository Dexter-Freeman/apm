import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { ProductDetailsGuard } from './product-details/product-details.guard';
import { ProductListComponent } from './products-list.component';
import { ConvertToSpacesPipe } from 'src/app/shared/pipes/convert-to-spaces.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailsComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { 
        path: 'products/:id',
        canActivate: [ProductDetailsGuard],
        component: ProductDetailsComponent 
      },
    ]),
    SharedModule
  ]
})
export class ProductsModule { }
