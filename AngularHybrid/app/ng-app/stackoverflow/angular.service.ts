import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
    deps: ['$location']
})
export class AngularService {

    private $location: ng.ILocationService;

    constructor($location: ng.ILocationService) {
        console.log("AngularJsService instantiation");
        this.$location = $location;
        console.log(this.$location.absUrl());
    }
}
