


class UserNotFound extends Error {
    constructor(message = "User Not Found. Please try with different email id ") {
        super(message);
        this.isOprational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

class InvalidPassword extends Error{
    constructor(message = "Invalid Password. Please enter a valid password") {
        super(message);
        this.isOprational = true;

        Error.captureStackTrace(this, this.constructor);
    }

}
class ProductNotFound extends Error{
    constructor(message = "Product Not Found. Please try Again") {
        super(message);
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }

}

module.exports ={ UserNotFound ,InvalidPassword ,ProductNotFound};

