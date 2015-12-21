/// <reference path="node_modules/angular2/bundles/typings/es6-shim/es6-shim.d.ts" />
/// <reference path="node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from "angular2/angular2";

@Component(
    {
        selector: "editor"
    })
@View({
    templateUrl: "Editor.html"
})

class Editor {
    showtooltip: boolean;
    value: string;

    constructor() {
        this.showtooltip = false;
        this.value = "Edit me.";
    }

    hideTooltip() {
        this.showtooltip = false;
    }

    toggleTooltip(e) {
        e.stopPropagation();
        this.showtooltip = !this.showtooltip;
    }
}

bootstrap(Editor);