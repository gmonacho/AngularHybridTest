import { AngularJsService } from "./angularjs.service";

export class AngularJsController implements ng.IController {

    public static $inject = [
        "AngularJsService"
    ]

    private svc: AngularJsService;

    constructor(svc: AngularJsService) {
        console.log('AngularJsController instantiation');
        this.svc = svc;
    }

    $onInit() {
    }
}
