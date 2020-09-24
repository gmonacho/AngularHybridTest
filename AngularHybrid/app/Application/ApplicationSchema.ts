import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { UpgradeModule } from "@angular/upgrade/static";
import { BaseService } from "../../app/BaseService";
import { ConvertController } from "../../app/ConvertController";
import { ConvertFormDirective } from "../../app/ConvertFormDirective";
//import { AppModule } from "ng-app/main";
import { ApplicationBase } from "./ApplicationBase";

import '../../ng-app/polyfills';

import '../../app/index'

export var instance: ApplicationSchema;

//@NgModule()
export class ApplicationSchema extends ApplicationBase {
    public $injector: ng.auto.IInjectorService;

    /**
     * Constructeur ApplicationSchema qui appelle le constructeur de ApplicationBase.
     */
    public constructor() {
        super();
    }

    protected name(): string {
        return "esaboraSchema";
    }
    protected moduleDependencies(): string[] {
        return [
            "ngRoute",
            "ng"/*,
            "pascalprecht.translate",
            "ngSanitize",
            "ui.sortable",
            "ui.sortable.multiselection",
            "ngResource",
            "ngCookies",
            "ngFileUpload",
            "kcd.directives",
            "ui.select",
            "ngMask"*/
        ];
    }
    protected registerFactories(): void {
        console.log("registerFactories vide");
        //throw new Error("Method not implemented.");
    }
    protected registerControllers(): void {
        this.module.controller('ConvertController', ConvertController);
    }
    protected registerDirectives(): void {
        this.module.directive('convertFormDirective', ConvertFormDirective);
    }
    protected registerFilters(): void {
        console.log("registerFilters vide");
    }
    protected registerConstants(): void {
        console.log("registerConstants vide");
    }
    protected registerServices(): void {
        this.module.service('BaseService', BaseService);
    }
    protected moduleConfiguration(): (string | Function)[] {
        let fonctionConfig = () => [];
        console.log("moduleConfiguration vide");
        return [ "nothing", fonctionConfig ];
        return  ;
    }
    protected moduleRun(): (string | Function)[] {
        let fonctionRun = ($injector: ng.auto.IInjectorService,) => {instance.$injector = $injector;};
        return [ "$injector", fonctionRun ];
    }
}
instance = new ApplicationSchema();
instance.start();

/*@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ]
})

export class AppModule {
    // Override Angular bootstrap so it doesn't do anything
    ngDoBootstrap() {
    }
}

// Bootstrap using the UpgradeModule
platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    console.log("Bootstrapping in Hybrid mode with Angular & AngularJS");
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    //upgrade.bootstrap(document.body, ['app']);
    angular.module('esaboraSchema', []);
    upgrade.bootstrap(document.body, ['esaboraSchema']);
});*/