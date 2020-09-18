import { downgradeComponent } from "@angular/upgrade/static";
import { AngularComponent } from "../ng-app/stackoverflow/angular.component";
import { AngularJsService } from "./stackoverflow/angularjs.service";
import { AngularJsController } from "./stackoverflow/angularjs.controller";
import { AngularJsDirective } from "./stackoverflow/angularjs.directive";
import { SecondComponent } from "../ng-app/stackoverflow/second.component";

angular.module('app', [])
    .controller('AngularJsController', AngularJsController)
    .service('AngularJsService', AngularJsService)
    .directive('angularjsDirective', AngularJsDirective)
    .directive('angularComponent', downgradeComponent({ component: AngularComponent }))
    .directive('secondComponent', downgradeComponent({ component: SecondComponent }));

