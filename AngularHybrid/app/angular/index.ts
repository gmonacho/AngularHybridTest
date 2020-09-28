import { StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { downgradeComponent, downgradeInjectable, downgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { AngularService } from './hello/angular.service';

const boostrapAppModule = (extraProviders: StaticProvider[]) => {
    const platformRef = platformBrowserDynamic(extraProviders);
    return platformRef.bootstrapModule(AppModule);
  };
  
  export const downgradedAngularAppModule = downgradeModule(boostrapAppModule);
  
  // Register all Angular items which should be usable in the Angular JS part of the application
  // This is the only place of the registration and keeps the Angular impl clear from Angular JS syntax
  angular
    .module(downgradedAngularAppModule)
    .factory('userService', downgradeInjectable(AngularService))
    .directive('app', downgradeComponent({ component: AppComponent }));
  
  // Re-export every item from Angular application which will be used in the Angular JS part
  // The Angular JS part the can use it like this: import { UserService, User } from '../../angular';
  // export * from './user/user.service';
  