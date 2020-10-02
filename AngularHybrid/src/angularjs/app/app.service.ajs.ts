
export class AngularJsService {

    public static $inject = [
        '$location'
    ] 

    private $location: ng.ILocationService;

    constructor($location: ng.ILocationService) {
        console.log("AngularJsService instantiation");
        this.$location = $location;
    }

    
    absUrl(): string {
        return "Hello i'm an AngularJs Service : " + this.$location.absUrl();
    }
}

