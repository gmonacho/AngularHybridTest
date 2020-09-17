import { downgradeComponent, downgradeInjectable } from "@angular/upgrade/static";
import { HexService } from "../ng-app/hex.service";
import { BaseService } from "./BaseService";
import { ConvertController } from "./ConvertController";
import { ConvertFormDirective } from "./ConvertFormDirective";

angular.module('app', [])
    .service('BaseService', BaseService)
    .controller('ConvertController', ConvertController)
    .directive('convertFormDirective', ConvertFormDirective)
    .factory('HexService', downgradeInjectable(HexService) as any);