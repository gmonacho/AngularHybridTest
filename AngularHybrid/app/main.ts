import './polyfills';
import { angularjsAppModule } from './angularjs/app/app.module.ajs';
  angular
  .bootstrap(
    document.body, 
    [angularjsAppModule], 
    { strictDi: true }
  );

// platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
//         console.log("Bootstrapping in Hybrid mode with Angular & AngularJS");
//         const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
//         upgrade.bootstrap(document.body, ['esaboraSchema']);
//     });
    
// const bootstrapFn = (extraProviders: StaticProvider[]) => {
//     setAngularJSGlobal(angular);
//     const platformRef = platformBrowserDynamic(extraProviders);
//     return platformRef.bootstrapModule(AppModule);
//   };

// export const AppModuleDowngraded = angular.module('AppModuleDowngraded', [downgradeModule(bootstrapFn)])
//     .directive('angularComponent', downgradeComponent({ component: AngularComponent }))
//     .service('AngularService', downgradeInjectable(AngularService));

// console.log("AppModuleDowgraded's name = ", AppModuleDowngraded.name);


// const boostrapAppModule = (extraProviders: StaticProvider[]) => {
//     const platformRef = platformBrowserDynamic(extraProviders);
//     return platformRef.bootstrapModule(AppModule);
//   };

// export const downgradedAngularAppModule = downgradeModule(boostrapAppModule);

// // Register all Angular items which should be usable in the Angular JS part of the application
// // This is the only place of the registration and keeps the Angular impl clear from Angular JS syntax
// angular
//   .module(downgradedAngularAppModule)
//   .factory('AngularService', downgradeInjectable(AngularService))
//   .directive('angularComponent', downgradeComponent({ component: AngularComponent }));

