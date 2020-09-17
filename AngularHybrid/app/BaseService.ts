import { IBaseService } from "./IBaseService";


export class BaseService implements IBaseService {
    constructor(){
        console.log('base.service is here!')
    }
    public moinsUn(x: number): number {
        return (x - 1);
    }

}
