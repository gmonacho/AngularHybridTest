import { AngularService } from "src/angular/hello/angular.service";
import { AngularJsService } from "./app.service.ajs";

export class AngularJsController implements ng.IController {

    public static $inject = [
        "AngularJsService"
    ]

    private svc: AngularJsService;

    constructor(svc: AngularJsService) {
        console.log('AngularJsController instantiation');
        this.svc = svc;
    }

    public absUrl(): string {
        return this.svc.absUrl();
    }

    $onInit() {
    }
}
