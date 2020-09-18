import { AngularJsService } from "./angularjs.service";
import { Inject } from "@angular/core";

export class AngularJsController implements ng.IController {

    public static $inject = [
        "AngularJsService"
    ]

    private svc: AngularJsService;

    constructor(@Inject(AngularJsService) svc: AngularJsService) {
        console.log('AngularJsController instantiation');
        this.svc = svc;
    }

    $onInit() {
    }
}
