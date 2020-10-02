
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AngularService } from './hello/angular.service';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    entryComponents: [
        AppComponent
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
export class MainAngularModule {
    // Empty placeholder method to satisfy the `Compiler`.
    ngDoBootstrap() {}
}
