import '../app/index'
import './polyfills'
import 'app/Application/ApplicationSchema';

import { ApplicationSchema } from "app/Application/ApplicationSchema";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    //bootstrap: [ApplicationSchema]
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
});