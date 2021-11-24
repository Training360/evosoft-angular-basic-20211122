import { Injectable } from '@angular/core';

export interface ITableColumn {
  key: string;
  title: string;
  disabled?: boolean;
  hidden?: boolean;
  type?: string;
  options?: {title: string, value: any}[];
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  userColumns: ITableColumn[] = [
    {key: 'id', title: '#', hidden: true, disabled: true},
    {key: 'name', title: 'Name'},
    {key: 'email', title: 'Email'},
    {key: 'category', title: 'Cat.', type: 'select',
      options: [
        {title: 'Guest', value: 'Guest'},
        {title: 'Editor', value: 'Editor'},
        {title: 'Admin', value: 'Admin'},
      ],
    },
  ];

  constructor() { }
}
