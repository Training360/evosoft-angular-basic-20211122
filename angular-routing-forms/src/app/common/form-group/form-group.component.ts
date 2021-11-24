import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ITableColumn } from 'src/app/service/config.service';

export interface IEntityType {
  [key: string]: any;
}

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

  @Input() col!: ITableColumn;
  @Input() entity!: IEntityType;

  @ViewChild('mainInput') mainInput!: NgModel;

  constructor() { }

  ngOnInit(): void {
  }

  checkValidity(): boolean {
    return Boolean(this.mainInput?.valid);
  }

}
