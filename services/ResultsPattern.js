export default class Result {
    constructor(success, data = undefined, pagination = undefined, error = undefined) {
        this.success = success;
        this.pagination = pagination;
        this.data = data;
        this.error = error;
    }

    static success(data, pagination) {
        return new Result(true, data, pagination);
    }

    static failure(error) {
        return new Result(false, undefined, undefined, error);
    }
}