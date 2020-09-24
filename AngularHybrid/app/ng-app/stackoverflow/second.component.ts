import { Component, Inject } from "@angular/core";
import { AngularService } from "./angular.service";

@Component({
    selector: 'second-component',
    templateUrl: 'app/ng-app/stackoverflow/second.template.html'
})
export class SecondComponent {

    private svc: AngularService;

    constructor(@Inject('AngularService') svc: AngularService) {
        console.log("SecondComponent instantiation");
        this.svc = svc;
    }
}
