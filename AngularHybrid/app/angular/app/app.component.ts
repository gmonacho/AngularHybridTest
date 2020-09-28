import { Component, Inject } from "@angular/core";
import { AngularService } from "../hello/angular.service";

@Component({
    selector: 'angular-component',
    templateUrl: 'app/ng-app/stackoverflow/angular.template.html'
})
export class AppComponent {

    public testInput: string = 'Input works';

    constructor(private svc: AngularService) {
        console.log("AngularComponent instantiation");
        this.svc = svc;
    }
}
