export default class Result {
    success?: boolean
    pagination?: Object
    data?: any
    error?: object

    constructor(success: boolean, data?: any, pagination?: Object, error?: object) {
        this.success = success;
        this.pagination = pagination;
        this.data = data;
        this.error = error;
    }

    static success(data?: any, pagination?: Object) {
        return new Result(true, data, pagination);
    }

    static failure(error?: Object) {
        return new Result(false, undefined, undefined, error);
    }
}
