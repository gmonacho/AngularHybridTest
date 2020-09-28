import { NgModule } from "@angular/core";
import { AngularJsService } from "./app/app.service.ajs";




export const AngularJsServiceProvider = {
    provide: AngularJsService,
    useClass: AngularJsService,
    deps: ['$injector']
  };
  
  @NgModule({
    // declarations: [AjsUserComponentWrapper],
    providers: [AngularJsServiceProvider],
    // exports: [AjsUserComponentWrapper]
  })
  export class AjsModule {}