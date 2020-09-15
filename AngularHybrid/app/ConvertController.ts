import { BaseService } from "./BaseService";

export class ConvertController implements ng.IController {

    public static $inject = [
        "BaseService",
    ]

    private baseSvc: BaseService;
    public nombre: number;
    public resultat: number;

    constructor(baseSvc: BaseService) {
        this.baseSvc = baseSvc;
    }
    
    OnConvert() {
        this.resultat = this.baseSvc.moinsUn(this.nombre);
    }

    $onInit() {
        this.nombre = 0;
        this.resultat = 0;
    }
}


angular.module('app', []).controller('ConvertController', ConvertController);