import { IServiceRoot } from "./IServiceRoot";

export class RootScreenController implements IServiceRoot {

    constructor() {
        console.log('RootScreenController Instantiated');
    }

    name(): void {
        console.log('IServiceRoot');
    }

}
