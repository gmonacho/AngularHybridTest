import '../app/index'
import './polyfills'

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AngularComponent } from './stackoverflow/angular.component';
import { AngularJsService } from '../app/stackoverflow/angularjs.service';
import { SecondComponent } from './stackoverflow/second.component';

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
            provide: AngularJsService,
            useClass: AngularJsService,
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
