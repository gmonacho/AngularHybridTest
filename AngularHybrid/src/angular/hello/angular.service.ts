import { Inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AngularService {

    private $location: ng.ILocationService;

    constructor(
        private $injector: ng.auto.IInjectorService
    ) {
        console.log("AngularService instantiation");
        this.$location = this.$injector.get<ng.ILocationService>("$location");
    }

    absUrl(): string {
        return "Hello I'm an Angular Service ! " + this.$location.absUrl();
    }
}
