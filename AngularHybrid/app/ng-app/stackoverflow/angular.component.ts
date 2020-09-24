import { Component, Inject } from "@angular/core";
import { AngularService } from "./angular.service";

@Component({
    selector: 'angular-component',
    templateUrl: 'app/ng-app/stackoverflow/angular.template.html'
})
export class AngularComponent {

    private svc: AngularService;
    public testInput: string = 'Input works';

    constructor(@Inject(AngularService) svc: AngularService) {
        console.log("AngularComponent instantiation");
        this.svc = svc;
    }
}
