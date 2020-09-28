import { AngularJsController } from "./app.controller.ajs";
import { AngularJsComponent } from "./app.component.ajs";
import { downgradedAngularAppModule } from "../../angular/index";

export const angularjsAppModule = 'ajs-app-module';

angular.module(angularjsAppModule, [
        downgradedAngularAppModule
    ])
    .controller('AngularJsController', AngularJsController)
    .directive('angularjsDirective', AngularJsComponent)
    .run(['$location', function($location) { $location.path('/angular'); }]);