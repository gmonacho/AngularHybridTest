import { Inject, Injectable } from "@angular/core";

@Injectable()
export class AngularService {

    constructor(
        private $location: ng.ILocationService
    ) {
        console.log("AngularService instantiation");
        this.$location = $location;
    }

    absUrl(): string {
        return "Hello I'm an Angular Service ! " + this.$location.absUrl();
    }
}
