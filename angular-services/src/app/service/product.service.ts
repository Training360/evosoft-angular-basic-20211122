import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = environment.apiUrl;
  entityName: string = 'products';
  list$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): void {
    this.http.get<Product[]>(`${this.apiUrl}${this.entityName}`).subscribe(
      list => this.list$.next(list),
    );
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(entity: Product): Observable<Product> {
    return this.http.post<Product>(
      `${this.apiUrl}${this.entityName}`,
      entity
    );
  }

  update(entity: Product): Observable<Product> {
    return this.http.patch<Product>(
      `${this.apiUrl}${this.entityName}/${entity.id}`,
      entity
    );
  }

  remove(id: number): void {
    this.http.delete<Product>(`${this.apiUrl}${this.entityName}/${id}`).subscribe(
      () => this.getAll(),
    );
  }

}
