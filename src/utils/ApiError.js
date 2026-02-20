class ApiError extends Error{
    constructor(
        statusCode,
        mesaage = "Something went wrong",
        errors =[],
        statck = ""
    ){
        super(mesaage)
        this.statusCode = statusCode
        this.data = null
        this.message = this.message
        this.success = false
        this.errors = errors


        if(statck) {
            this.stack = statck
        }else{
            Error.captureStackTrace(this , this.constructor)
        }
    }
}

export {ApiError}