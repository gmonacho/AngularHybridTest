import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DemoAngularComponent } from 'DemoAngular/demo-angular.component';
import { DemoModaleComponent } from 'DemoAngular/demo-modale.component';

import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    declarations: [DemoAngularComponent, DemoModaleComponent],
    entryComponents: [DemoAngularComponent, DemoModaleComponent],
    providers: [
        {
            provide: '$location',
            useFactory: ($injector: any) => $injector.get('$location'),
            deps: ['$injector']
        },
        /*{
            provide: '$injector',
            useValue: angular.injector()
        },*/
        {
            provide: 'IManipulerModaleLocator',
            useClass: RootScreenController,
            deps: ['$injector']
        },
        //AlerteModaleViewService
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) { }
    ngDoBootstrap() {
        console.log("EST ENTRER DANS APP.MODULE")
        this.upgrade.bootstrap(document.documentElement, ['esaboraSchema']);
    }
}