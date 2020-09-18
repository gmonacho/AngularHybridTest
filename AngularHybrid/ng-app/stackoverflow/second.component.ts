import { Component, Inject } from "@angular/core";
import { AngularJsService } from "../../app/stackoverflow/angularjs.service";

@Component({
    selector: 'angular-component',
    templateUrl: 'ng-app/stackoverflow/second.template.html'
})
export class SecondComponent {

    private svc: AngularJsService;

    constructor(@Inject(AngularJsService) svc: AngularJsService) {
        console.log("SecondComponent instantiation");
        this.svc = svc;
    }
}
