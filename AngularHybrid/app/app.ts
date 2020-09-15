import { BaseService } from "./BaseService";
import { ConvertController } from "./ConvertController";
import { ConvertFormDirective } from "./ConvertFormDirective";

angular.module('app', [])
    .service('BaseService', BaseService)
    .controller('ConvertController', ConvertController)
    .directive('convertFormDirective', ConvertFormDirective);
