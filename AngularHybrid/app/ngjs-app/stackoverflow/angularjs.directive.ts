
export function AngularJsDirective(): ng.IDirective {
    return {
        template: ` <div ng-controller="AngularJsController as vm">
                        <h2>AngularJs Directive</h2>
                    </div>`
    };
}