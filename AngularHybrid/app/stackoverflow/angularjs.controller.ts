import { AngularJsService } from "./angularjs.service";
import { AngularService } from "../../ng-app/stackoverflow/angular.service";

export class AngularJsController implements ng.IController {

    public static $inject = [
        "AngularService"
    ]

    private svc: AngularService;

    constructor(svc: AngularService) {
        console.log('AngularJsController instantiation');
        this.svc = svc;
    }

    $onInit() {
    }
}
