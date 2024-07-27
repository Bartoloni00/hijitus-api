export default class Result {
    constructor(success, data = undefined, error = undefined) {
        this.success = success;
        this.data = data;
        this.error = error;
    }

    static success(data) {
        return new Result(true, data);
    }

    static failure(error) {
        return new Result(false, undefined, error);
    }
}