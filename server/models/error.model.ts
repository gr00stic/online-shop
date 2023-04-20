class ApiError extends Error {
    status: number;
    errors: any;

    constructor(status: number, message: string, errors = {}){
        super(message);
        this.status = status;
        this.errors = errors;

        Object.setPrototypeOf(this, ApiError.prototype);
    }

    static badRequest(message: string, errors = {}){
        return new ApiError(400, message, errors);
    }

    static notFound(message: string, errors = {}){
        return new ApiError(404, message, errors);
    }

    static unauthorizedError(){
        return new ApiError(401, 'Not authorized');
    }

    static forbiddenError(){
        return new ApiError(403, 'Forbidden');
    }
}

export default ApiError;