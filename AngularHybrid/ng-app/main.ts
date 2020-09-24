import '../app/index'
import './polyfills'
import 'app/Application/ApplicationSchema';

import { ApplicationSchema } from "app/Application/ApplicationSchema";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AngularComponent } from './stackoverflow/angular.component';
import { SecondComponent } from './stackoverflow/second.component';
import { AngularService } from './stackoverflow/angular.service';

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        FormsModule
    ],
    declarations: [
        AngularComponent, SecondComponent
    ],
    entryComponents: [
        AngularComponent, SecondComponent
    ],
    providers: [
        {
            provide: AngularService,
            useClass: AngularService,
            deps: ['$location']
        },
        {
            provide: '$location',
            useFactory: ($injector: any) => $injector.get('$location'),
            deps: ['$injector']
        },
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
    upgrade.bootstrap(document.body, ['app']);
});
