import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/shared/services/products.service';
import { IProduct } from './products.interface';

@Component({
  selector: 'pm-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = true;
  pageTitle: string = 'Product List';
  errorMessage: string = '';
  sub!: Subscription;

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  // Если в products не присвоить дефолтное значание в виде пустого массива
  // то в консоли будет ошибка, долго не мог понять почему она появляется
  // ERROR TypeError: Cannot read property 'length' of undefined
 //   at ProductListComponent_Template (products-list.component.html:20)
  products: IProduct[] = [];

  constructor( private productsService: ProductsService) { }

  ngOnInit(): void {
    this.sub = this.productsService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      err => this.errorMessage = err
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => 
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

}
