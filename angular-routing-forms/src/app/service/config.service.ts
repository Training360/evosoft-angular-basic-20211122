import { Injectable } from '@angular/core';

export interface ITableColumn {
  key: string;
  title: string;
  disabled?: boolean;
  hidden?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  userColumns: ITableColumn[] = [
    {key: 'id', title: '#', hidden: true, disabled: true},
    {key: 'name', title: 'Name'},
    {key: 'email', title: 'Email'},
    {key: 'category', title: 'Cat.'},
  ];

  constructor() { }
}
