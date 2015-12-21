/// <reference path="node_modules/angular2/bundles/typings/es6-shim/es6-shim.d.ts" />
/// <reference path="node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />
System.register(["angular2/angular2"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var angular2_1;
    var Contact;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            Contact = (function () {
                function Contact() {
                    this.email = 'John.Doe@gmail.com';
                    this.name = 'John Doe';
                    this.phone = '1-800-GOOG';
                }
                Contact = __decorate([
                    angular2_1.Component({
                        selector: 'contact'
                    }),
                    angular2_1.View({
                        templateUrl: 'Contact.html'
                    })
                ], Contact);
                return Contact;
            })();
            angular2_1.bootstrap(Contact);
        }
    }
});
//# sourceMappingURL=app.js.map