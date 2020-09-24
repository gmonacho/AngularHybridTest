//import { Injectable } from "@angular/core";

//@Injectable()


export class AngularJsService {

    public static $inject = [
        '$location'
    ] 

    private $location: ng.ILocationService;

    constructor($location: ng.ILocationService) {
        console.log("AngularJsService instantiation");
        this.$location = $location;
        console.log(this.$location.absUrl());
    }
}
