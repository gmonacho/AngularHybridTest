

export class BaseService {

    public moinsUn(x: number): number {
        return (x - 1);
    }

}

angular.module('app').service('BaseService', BaseService);
