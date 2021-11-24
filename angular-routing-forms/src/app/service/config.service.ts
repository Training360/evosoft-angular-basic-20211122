import { Injectable } from '@angular/core';

export interface ITableColumn {
  key: string;
  title: string;
  editable?: boolean;
  hidden?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  userColumns: ITableColumn[] = [
    {key: 'id', title: '#', hidden: true},
    {key: 'name', title: 'Name'},
    {key: 'email', title: 'Email'},
    {key: 'category', title: 'Cat.'},
  ];

  constructor() { }
}
