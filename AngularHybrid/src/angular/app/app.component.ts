import { Component, Inject, Input } from "@angular/core";
import { AngularJsService } from "src/angularjs/app/app.service.ajs";

@Component({
    selector: 'angular-component',
    template: `
    <div>
        <h2>Angular Component</h2>
        <p>{{ svc.absUrl() }}</p>
        <p>test de @Input : {{ testInput }}</p>
    </div>
    `
})
export class AppComponent {

    @Input() public testInput: string = "Input doesn't works";
    private svc: AngularJsService;

    constructor(
        @Inject('$injector') private $injector: any
    ) {
        console.log("AngularComponent instantiation");
        this.svc = this.$injector.get('AngularJsService');
    }
}
