import {bootstrap} from 'angular2/angular2';
import {Component, View} from 'angular2/angular2';

import {GDGHeader} from './components/header/header';

@Component({
  selector: 'gdg-app'
})
@View({
  directives: [GDGHeader], // Comente essa linha e o serve funciona normalmente
  templateUrl: './app/app.html'
})
export class GDGApp {
  siteName: string;

  constructor() {
    this.siteName = 'GDG Aracaju';
  }
}

bootstrap(GDGApp);
