
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { downgradeComponent, downgradeModule } from '@angular/upgrade/static';
import { StaticProvider } from "@angular/core";

import { AngularJsController } from './app/app.controller.ajs';
import { AngularJsComponent } from './app/app.component.ajs';

import { MainAngularModule } from "../angular/angular.app";
import { AppComponent } from '../angular/app/app.component';
import { AngularJsService } from './app/app.service.ajs';

const bootstrapFn = (extraProviders: StaticProvider[]) => {
    const platformRef = platformBrowserDynamic(extraProviders);
    console.log('Boostrap du module Angular');
    return platformRef.bootstrapModule(MainAngularModule);
};

const downgradedModule: string = downgradeModule(bootstrapFn);

// angular.module('mainAngularModule', [
//     downgradedModule
// ])
// .directive('app', downgradeComponent({ component: AppComponent}))
// .service('AngularService', downgradeInjectable(AngularService));

angular.module('mainAngularJsModule', [
    downgradedModule
])
.controller('AngularJsController', AngularJsController)
.directive('ajsApp', AngularJsComponent)
.directive('app', downgradeComponent({component: AppComponent}))
.service('AngularJsService', AngularJsService);

// .directive('app', downgradeComponent({ component: AppComponent }));

console.log("mainAngularJsModule Created")
