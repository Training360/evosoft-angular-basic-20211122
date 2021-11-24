import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends {id: number}> {

  apiUrl: string = environment.apiUrl;
  entityName: string = '';
  list$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);

  constructor(
    public http: HttpClient,
  ) { }

  getAll(): void {
    this.http.get<T[]>(`${this.apiUrl}${this.entityName}`).subscribe(
      list => this.list$.next(list),
    );
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(
      `${this.apiUrl}${this.entityName}`,
      entity
    );
  }

  update(entity: T): Observable<T> {
    return this.http.patch<T>(
      `${this.apiUrl}${this.entityName}/${entity.id}`,
      entity
    );
  }

  remove(id: number): void {
    this.http.delete<T>(`${this.apiUrl}${this.entityName}/${id}`).subscribe(
      () => this.getAll(),
    );
  }
}
