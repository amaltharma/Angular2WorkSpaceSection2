import {Component} from 'angular2/core';
import {MyComponent} from './my-component.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 </h1>
        <p>Amal</p>
        <my-component></my-component>
    `,
    directives:[MyComponent]
})
export class AppComponent {

}
