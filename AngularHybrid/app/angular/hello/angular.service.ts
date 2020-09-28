import { Injectable } from "@angular/core";

@Injectable()
export class AngularService {

    private $location: ng.ILocationService;

    constructor($location: ng.ILocationService) {
        console.log("AngularService instantiation");
        this.$location = $location;
        console.log(this.$location.absUrl());
    }

    absUrl(): string {
        return this.$location.absUrl();
    }
}
