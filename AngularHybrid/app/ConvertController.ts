import { IBaseService } from "./IBaseService";

export class ConvertController implements ng.IController {

    public static $inject = [
        "BaseService",
        "$location"
    ]

    private baseSvc: IBaseService;
    private $location: ng.ILocationService;
    private $injector: ng.auto.IInjectorService;
    public nombre: number;
    public resultat: string;

    constructor(baseSvc: IBaseService,
        $location: ng.ILocationService,
        $injector: ng.auto.IInjectorService) {
        this.baseSvc = baseSvc;
        this.$location = $location;
        this.$injector = $injector;
    }
    
    OnConvert() {
        this.resultat = 'location : ' + this.$location.absUrl() + ' dimension numero ' + this.baseSvc.moinsUn(this.nombre);
    }

    $onInit() {
        this.nombre = 0;
        this.resultat = "vide";
    }
}

