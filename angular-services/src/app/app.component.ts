import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs';
import { Product } from './model/product';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-services';

  productSub: Subscription = new Subscription();

  phrase: string = '';

  keyPhrase: string = '';

  keyList: {key: string, title: string}[] = [];

  // list: Product[] = [];
  list$: BehaviorSubject<Product[]> = this.productService.list$;

  constructor(
    private productService: ProductService,
  ) {
    this.keyList = Object.keys(new Product()).map( key => {
      return {key, title: [key.slice(0, 1).toUpperCase(), key.slice(1)].join('')};
    });
    this.keyList.unshift({key: '', title: 'All field'});
  }

  ngOnInit() {
    this.productService.getAll();
  }

  onDelete(product: Product): void {
    if (!confirm('Are you sure?')) {
      return;
    }
    this.productService.remove(product.id);
  }

  // ngOnInit() {
  //   this.productSub = this.productService.getAll().subscribe(
  //     products => this.list = products,
  //   );
  // }

  // ngOnDestroy() {
  //   this.productSub.unsubscribe();
  // }
}
