/// <reference path="node_modules/angular2/bundles/typings/es6-shim/es6-shim.d.ts" />
/// <reference path="node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />
System.register(["angular2/angular2"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var angular2_1;
    var Editor;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            Editor = (function () {
                function Editor() {
                    this.showtooltip = false;
                    this.value = "Edit me.";
                }
                Editor.prototype.hideTooltip = function () {
                    this.showtooltip = false;
                };
                Editor.prototype.toggleTooltip = function (e) {
                    e.stopPropagation();
                    this.showtooltip = !this.showtooltip;
                };
                Editor = __decorate([
                    angular2_1.Component({
                        selector: "editor"
                    }),
                    angular2_1.View({
                        templateUrl: "Editor.html"
                    })
                ], Editor);
                return Editor;
            })();
            angular2_1.bootstrap(Editor);
        }
    }
});
//# sourceMappingURL=app.js.map