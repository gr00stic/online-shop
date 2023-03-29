class ApiError extends Error {
    status: number;
    message: string;

    constructor(status: number, message: string){
        super(message);
        this.status = status;

        Object.setPrototypeOf(this, ApiError.prototype);
    }

    static notFound(message: string){
        return new ApiError(404, 'Not found');
    }
}

export default ApiError;