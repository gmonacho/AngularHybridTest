import { ConvertController } from "./ConvertController";


export function ConvertFormDirective(): ng.IDirective {
    return {
        controller: ConvertController,
        template: ` <div ng-controller="ConvertController as vm">
                        <p>Nombre</p>
                        <input type="text" ng-model="vm.nombre" />
                        <button ng-click="vm.OnConvert()">Calculer</button>
                        <p>Puet : {{ vm.resultat }}</p>
                    </div>`
    };
}

//<p>Base < /p>
//    < input type = "text" ng - model="vm.base" />