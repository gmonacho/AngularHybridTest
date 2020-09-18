import { Injectable, Inject } from "@angular/core";

@Injectable()
export class AngularJsService {

    private $location: ng.ILocationService;

    constructor($location: ng.ILocationService) {
        console.log("AngularJsService instantiation");
        this.$location = $location;
        console.log(this.$location.absUrl());
    }
}
