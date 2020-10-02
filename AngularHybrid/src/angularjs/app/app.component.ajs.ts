
export function AngularJsComponent(): ng.IDirective {
    return {
        template: ` <div ng-controller="AngularJsController as vm">
                        <h2>AngularJs Directive</h2>
                        <p>{{ vm.absUrl() }}</p>
                    </div>`
    };
}