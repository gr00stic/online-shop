const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode
    switch (statusCode) {
        case 400:
            res.json({
                title: "Invalid input",
                message: err.message,
            })
            break;
            
        case 404:
            res.json({
                title: "Not found",
                message: err.message,
            })
    
        default:
            break;
    }
    
}

module.exports = errorHandler