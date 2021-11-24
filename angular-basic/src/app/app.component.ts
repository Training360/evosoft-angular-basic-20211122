import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // {{ title }}: interpolation, one-way, class -> template
  title = 'Evosoft-basic';

  // [class]: property-binding, one-way, class -> template
  elementClass: string = 'blue';

  // [(ngModel)]: two-way-data-binding, class -> tamplate or template -> class
  userEmail: string = 'user@gmail.com';

  constructor() {
    setInterval( () => {
      const cd: Date = new Date();
      const output: string = `${cd.getHours()}:${cd.getMinutes()}:${cd.getSeconds()}`;
      this.title = output;
      this.elementClass = this.elementClass === 'blue' ? 'red' : 'blue';
      console.log(this.userEmail);
    }, 1000);
  }

  // (click): event-binding, one-way, template -> class
  onSave(event: MouseEvent): void {
    console.log(event);
  }
}
