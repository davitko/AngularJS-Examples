/// <reference path="node_modules/angular2/bundles/typings/es6-shim/es6-shim.d.ts" />
/// <reference path="node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from "angular2/angular2";

@Component(
    {

        selector: 'contact'
    })
@View({
        templateUrl: 'Contact.html'
})
  
class Contact {
    name: string;
    email: string;
    phone: string;
    constructor() {
        this.email = 'John.Doe@gmail.com';
        this.name = 'John Doe';
        this.phone = '1-800-GOOG';
    }
}

bootstrap(Contact);