import { Component, Inject } from "@angular/core";
import { AngularJsService } from "../../app/stackoverflow/angularjs.service";
import { AngularService } from "./angular.service";

@Component({
    selector: 'angular-component',
    templateUrl: 'ng-app/stackoverflow/angular.template.html'
})
export class AngularComponent {

    private svc: AngularService;
    public testInput: string = 'Input works';

    constructor(@Inject(AngularService) svc: AngularService) {
        console.log("AngularComponent instantiation");
        this.svc = svc;
    }
}
