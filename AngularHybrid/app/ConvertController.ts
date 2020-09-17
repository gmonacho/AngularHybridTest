import { HexService } from "ng-app/hex.service";
import { IBaseService } from "./IBaseService";

export class ConvertController implements ng.IController {

    public static $inject = [
        "HexService",
        "BaseService",
        "$location"
    ]

    private hexservice: HexService;
    private baseSvc: IBaseService;
    private $location: ng.ILocationService;
    private $injector: ng.auto.IInjectorService;
    public nombre: number;
    public resultat: string;

    constructor(_HexService: HexService,
        baseSvc: IBaseService,
        $location: ng.ILocationService,
        $injector: ng.auto.IInjectorService) {
        this.hexservice = _HexService
        this.baseSvc = baseSvc;
        this.$location = $location;
        this.$injector = $injector;
    }
    
    OnConvert() {
        this.resultat = 'location : ' + this.$location.absUrl() + '\ndimension numero : ' + this.baseSvc.moinsUn(this.nombre) +'\nhexangular : ' + this.hexservice.getHex(this.nombre);
        //this.resultat = 'location : ' + this.hexservice.getHex(this.nombre);
    }

    $onInit() {
        this.nombre = 0;
        this.resultat = "vide";
    }
}

