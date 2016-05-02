import {Component} from 'angular2/core';
import {TestComponent} from './test.component';
import {OnInit} from "angular2/core";

@Component({
selector:'my-component',
template: `Hi, <span [style.color] ="inputElement.value === 'yes' ? 'red' : ''"> {{name}}!</span>
<br>
This my very first Angular2 Component.
<br>
<br>

<span [class.is-awsome]="inputElement.value === 'yes'"> You are awsome. <span>
<br>
<br>
Are you awsome?
<input type="text" #inputElement (keyup)="0">
<button [disabled]="inputElement.value !== 'yes'">Only enabled if 'yes' was entered </button>
<test></test>`,
styleUrls: ['src/css/mycomponent.css'],
directives: [TestComponent]
})

export class MyComponent implements OnInit {
 name: string;

 ngOnInit() :any {
    this.name = "Akasan";
 }
}
