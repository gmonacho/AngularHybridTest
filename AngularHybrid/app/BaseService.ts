import { IBaseService } from "./IBaseService";


export class BaseService implements IBaseService {

    public moinsUn(x: number): number {
        return (x - 1);
    }

}
