import { downgradeComponent, downgradeInjectable } from "@angular/upgrade/static";
import { AngularComponent } from "../ng-app/stackoverflow/angular.component";
import { AngularJsService } from "./stackoverflow/angularjs.service";
import { AngularJsController } from "./stackoverflow/angularjs.controller";
import { AngularJsDirective } from "./stackoverflow/angularjs.directive";
import { SecondComponent } from "../ng-app/stackoverflow/second.component";
import { AngularService } from "../ng-app/stackoverflow/angular.service";

angular.module('app', [])
    .controller('AngularJsController', AngularJsController)
    .service('AngularService', downgradeInjectable(AngularService))
    .directive('angularjsDirective', AngularJsDirective)
    .directive('angularComponent', downgradeComponent({ component: AngularComponent }))
    .directive('secondComponent', downgradeComponent({ component: SecondComponent }));