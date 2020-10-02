
import { downgradeComponent, downgradeInjectable } from "@angular/upgrade/static";

import { ApplicationBase } from "./Application/ApplicationBase";
import { AngularJsController } from "./ngjs-app/stackoverflow/angularjs.controller";
import { AngularJsDirective } from "./ngjs-app/stackoverflow/angularjs.directive";
import { AngularComponent } from "./ng-app/stackoverflow/angular.component";
import { AngularService } from "./ng-app/stackoverflow/angular.service";
import { ButtonTooltipComponent } from "./ng-app/tooltip/button-tooltip.component";

export var instance: ApplicationSchema;

export class ApplicationSchema extends ApplicationBase {
    public $injector: ng.auto.IInjectorService;

    /**
     * Constructeur ApplicationSchema qui appelle le constructeur de ApplicationBase.
     */
    public constructor() {
        super();
    }

    protected name(): string {
        return "esaboraSchema";
    }

    protected moduleDependencies(): string[] {
        return [
            "ng"/*,
            "ngRoute",
            "pascalprecht.translate",
            "ngSanitize",
            "ui.sortable",
            "ui.sortable.multiselection",
            "ngResource",
            "ngCookies",
            "ngFileUpload",
            "kcd.directives",
            "ui.select",
            "ngMask"*/
        ];
    }

    protected registerFactories(): void {
        //throw new Error("Method not implemented.");
    }

    protected registerControllers(): void {
        this.module.controller('AngularJsController', AngularJsController);
    }

    protected registerDirectives(): void {
        this.module.directive('angularjsDirective', AngularJsDirective);
        this.module.directive('angularComponent', downgradeComponent({ component: AngularComponent }));
        this.module.directive('buttonTooltip', downgradeComponent({ component: ButtonTooltipComponent }))
    }
    
    protected registerServices(): void {
        this.module.service('AngularService', downgradeInjectable(AngularService));
    }

    protected registerFilters(): void {
    }

    protected registerConstants(): void {
    }

    protected moduleConfiguration(): (string | Function)[] {
        let fonctionConfig = () => [];
        console.log("moduleConfiguration");
        return [ "nothing", fonctionConfig ];
    }

    protected moduleRun(): (string | Function)[] {
        let fonctionRun = ($injector: ng.auto.IInjectorService,) => {instance.$injector = $injector;};
        return [ "$injector", fonctionRun ];
    }
}

instance = new ApplicationSchema;
instance.start();