export default class Result {
    constructor(success, data = null, error = null) {
        this.success = success;
        this.data = data;
        this.error = error;
    }

    static success(data) {
        return new Result(true, data);
    }

    static failure(error) {
        return new Result(false, null, error);
    }
}