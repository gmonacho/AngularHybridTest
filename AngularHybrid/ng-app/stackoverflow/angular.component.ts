import { Component, Inject } from "@angular/core";
import { AngularJsService } from "../../app/stackoverflow/angularjs.service";

@Component({
    selector: 'angular-component',
    templateUrl: 'ng-app/stackoverflow/angular.template.html'
})
export class AngularComponent {

    private svc: AngularJsService;

    constructor(@Inject(AngularJsService) svc: AngularJsService) {
        console.log("AngularComponent instantiation");
        this.svc = svc;
    }
}